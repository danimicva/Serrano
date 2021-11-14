
function cellSelected(text) {
    $('#cellSelected').html("Cell selected: " + text);
}

function cellCopied(text) {
    $('#cellCopied').html("Cell copied: " + text);
}



const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const parseConsts = model_graph => {
    const dtypes = {
        'DT_INT32': ['int32', 'intVal', Int32Array],
        'DT_FLOAT': ['float32', 'floatVal', Float32Array]
    };

    const consts = {};
    model_graph.modelTopology.node.filter(n => n.op == 'Const').forEach((node => {
        const v = node.attr.value.tensor;
        const [dtype, field, arrayType] = dtypes[v.dtype];
        if (!v.tensorShape.dim) {
            consts[node.name] = [tf.scalar(v[field][0], dtype)];
        } else {
            // if there is a 0-length dimension, the exported graph json lacks "size"
            const shape = v.tensorShape.dim.map(d => (!d.size) ? 0 : parseInt(d.size));
            let arr;
            if (v.tensorContent) {
                const data = atob(v.tensorContent);
                const buf = new Uint8Array(data.length);
                for (var i = 0; i < data.length; ++i) {
                    buf[i] = data.charCodeAt(i);
                }
                arr = new arrayType(buf.buffer);
            } else {
                const size = shape.reduce((a, b) => a * b);
                arr = new arrayType(size);
                if (size) {
                    arr.fill(v[field][0]);
                }
            }
            consts[node.name] = [tf.tensor(arr, shape, dtype)];
        }
    }));
    return consts;
}

const run = async () => {
    const r = await fetch(GRAPH_URL);
    const consts = parseConsts(await r.json());

    const model = await tf.loadGraphModel(GRAPH_URL);
    Object.assign(model.weights, consts);

    let seed = new Array(16).fill(0).map((x, i) => i < 3 ? 0 : 1);
    seed = tf.tensor(seed, [1, 1, 1, 16]);
    seed.print();

    let emptyCell = new Array(16).fill(0);
    emptyCell = tf.tensor(emptyCell, [1, 1, 1, 16]);
    emptyCell.print();

    const D = 96;
    const initState = tf.tidy(() => {
        const D2 = D / 2;
        const a = seed.pad([[0, 0], [D2 - 1, D2], [D2 - 1, D2], [0, 0]]);
        return a;
    });

    const state = tf.variable(initState);
    const [_, h, w, ch] = state.shape;

    const damage = (x, y, r) => {
        tf.tidy(() => {
            const rx = tf.range(0, w).sub(x).div(r).square().expandDims(0);
            const ry = tf.range(0, h).sub(y).div(r).square().expandDims(1);
            const mask = rx.add(ry).greater(1.0).expandDims(2);
            state.assign(state.mul(mask));
        });
    }

    const plantSeed = (x, y) => {
        const x2 = w - x - seed.shape[2];
        const y2 = h - y - seed.shape[1];
        if (x < 0 || x2 < 0 || y < 0 || y2 < 0)
            return;
        tf.tidy(() => {
            const a = seed.pad([[0, 0], [y, y2], [x, x2], [0, 0]]);
            state.assign(state.add(a));
        });
    }

    let play = false;

    function playPause() {
        play = !play;
        if (play)
            $('#step').hide();
        else
            $('#step').show();
    }

    let toBeCopied = null;

    const select = (x, y) => {
        const sel = state.slice([0, x, y, 0], [1, 1, 1, -1]);
        cellSelected("X: " + x + " Y: " + y + ". Tensor: " + sel.toString());
    }
    const copy = (x, y) => {
        toBeCopied = state.slice([0, x, y, 0], [1, 1, 1, -1]);
        cellCopied("X: " + x + " Y: " + y + ". Tensor: " + toBeCopied.toString());
    }

    const paste = (x, y) => {
        if (toBeCopied == null)
            return;
        const x2 = w - x - toBeCopied.shape[2];
        const y2 = h - y - toBeCopied.shape[1];
        if (x < 0 || x2 < 0 || y < 0 || y2 < 0)
            return;
        tf.tidy(() => {
            const a = toBeCopied.pad([[0, 0], [y, y2], [x, x2], [0, 0]]);
            state.assign(state.add(a));
        });
    }

    const copyPaste = (xOrig, yOrig, xDest, yDest, borrarOrigen) => {

        tf.tidy(() => {

            let clipBoard = state.slice([0, xOrig, yOrig, 0], [1, 1, 1, -1]);

            const x2 = w - xDest - clipBoard.shape[2];
            const y2 = h - yDest - clipBoard.shape[1];
            if (xDest < 0 || x2 < 0 || yDest < 0 || y2 < 0)
                return;
            const a = clipBoard.pad([[0, 0], [yDest, y2], [xDest, x2], [0, 0]]);
            state.assign(state.add(a));

            if (borrarOrigen) {
                const rx = tf.range(0, w).sub(xOrig).square().expandDims(0);
                const ry = tf.range(0, h).sub(yOrig).square().expandDims(1);
                const mask = rx.add(ry).greaterEqual(1.0).expandDims(2);
                state.assign(state.mul(mask));
            }


        });
    }

    $('#copiaPegaButton').click(e => {
        const xOrig = parseInt($('#xOrig').val());
        const yOrig = parseInt($('#yOrig').val());
        const xDest = parseInt($('#xDest').val());
        const yDest = parseInt($('#yDest').val());
        const width = parseInt($('#width').val());
        const height = parseInt($('#height').val());
        const borrarOrigen = $('#copiarBorrarOrigen').is(':checked');

        let despausar = false;
        if (play) {
            playPause();
            despausar = true;
        }

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                copyPaste(xOrig + i, yOrig + j, xDest + i, yDest + j, borrarOrigen);
            }
        }
        if (despausar)
            playPause();
    });

    $('#playPause').click(e => {
        playPause();
    });

    $('#step').click(e => {
        step(true);
    });

    $('#desplazaPixeles').click(e => {
        const stringInicial = $('#listaPixeles').val();
        const xDesp = parseInt($('#xDesp').val());
        const yDesp = parseInt($('#yDesp').val());
        const borrarOrigen = $('#desplazarBorrarOrigen').is(':checked');

        const listaStrings = stringInicial.split(";");
        const listaPixeles = [];
        listaStrings.forEach(p => {
            if (!p || p == "")
                return;
            const p2 = p.split(",");
            listaPixeles.push({ x: parseInt(p2[0]), y: parseInt(p2[1]) });
        });

        desplazaPixeles(listaPixeles, xDesp, yDesp, borrarOrigen);
    });

    const desplazaPixeles = (listaPixeles, xDesp, yDesp, borrarOrigen) => {
        let despausar = false;
        if (play) {
            playPause();
            despausar = true;
        }

        listaPixeles.forEach(p => {
            copyPaste(p.x, p.y, p.x + xDesp, p.y + yDesp, borrarOrigen);
        });

        if (despausar)
            playPause();
    };

    const scale = 4;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w * scale}px`;
    canvas.style.height = `${h * scale}px`;

    canvas.onmousedown = e => {
        /*const x = Math.floor(e.clientX / scale);
        const y = Math.floor(e.clientY / scale);
        if (e.buttons == 1) {
            if (e.shiftKey) {
                //plantSeed(x, y);
                copy(x, y);
            } else if (e.ctrlKey) {
                //damage(x, y, 8);
                paste(x, y);
            } else {
                select(x, y);
            }
        }*/
        mouseEvent(e);

    }
    canvas.onmousemove = e => {
        /*const x = Math.floor(e.clientX / scale);
        const y = Math.floor(e.clientY / scale);
        if (e.buttons == 1 && !e.shiftKey) {
            damage(x, y, 8);
        }*/
        mouseEvent(e);
    }

    function mouseEvent(e) {
        const x = Math.floor(e.clientX / scale);
        const y = Math.floor(e.clientY / scale);
        if (e.buttons == 1) {
            if (e.shiftKey) {
                //plantSeed(x, y);
                //copy(x, y);
                addToCopyList(x, y);
            } else if (e.ctrlKey) {
                //damage(x, y, 8);
                //paste(x, y);
                calculateDistance(x, y);
            } else {
                select(x, y);
            }
        }
    }

    let listaPixeles = [];

    function calculateDistance(x, y) {
        if (listaPixeles.length == 0)
            return;

        $('#xDesp').val(x - listaPixeles[0].x);
        $('#yDesp').val(y - listaPixeles[0].y);
    }

    function addToCopyList(x, y) {

        if (listaPixeles.filter(p => p.x == x && p.y == y).length > 0)
            return;

        listaPixeles.push({ x, y });

        let txt = "";
        listaPixeles.forEach(p => {
            txt += p.x + "," + p.y + ";";
        })

        $('#listaPixeles').val(txt);
    }


    function step(force = false) {
        //console.log(state.slice([0, 0, 0, 0], [-1, -1, -1, 4]));
        //debugger;
        if (!play && !force)
            return;
        tf.tidy(() => {
            state.assign(model.execute(
                {
                    x: state, fire_rate: tf.tensor(0.5),
                    angle: tf.tensor(0.0), step_size: tf.tensor(1.0)
                }, ['Identity']));
        });
    }

    function render() {
        step();

        const imageData = tf.tidy(() => {
            const rgba = state.slice([0, 0, 0, 0], [-1, -1, -1, 4]);
            const a = state.slice([0, 0, 0, 3], [-1, -1, -1, 1]);
            const img = tf.tensor(1.0).sub(a).add(rgba).mul(255);
            const rgbaBytes = new Uint8ClampedArray(img.dataSync());
            return new ImageData(rgbaBytes, w, h);
        });
        ctx.putImageData(imageData, 0, 0);

        requestAnimationFrame(render);
    }
    render();
}
run();
