import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private httpClient: HttpClient) { }

  public static Models: string[] = [
    "fire_rate_1.0 target_emoji_1F384 run_index_0",
    "fire_rate_1.0 target_emoji_1F384 run_index_1",
    "fire_rate_1.0 target_emoji_1F384 run_index_2",
    "fire_rate_1.0 target_emoji_1F41E run_index_0",
    "fire_rate_1.0 target_emoji_1F41E run_index_1",
    "fire_rate_1.0 target_emoji_1F41E run_index_2",
    "fire_rate_1.0 target_emoji_1F420 run_index_0",
    "fire_rate_1.0 target_emoji_1F420 run_index_1",
    "fire_rate_1.0 target_emoji_1F420 run_index_2",
    "fire_rate_1.0 target_emoji_1F441 run_index_0",
    "fire_rate_1.0 target_emoji_1F441 run_index_1",
    "fire_rate_1.0 target_emoji_1F441 run_index_2",
    "fire_rate_1.0 target_emoji_1F4A5 run_index_0",
    "fire_rate_1.0 target_emoji_1F4A5 run_index_1",
    "fire_rate_1.0 target_emoji_1F4A5 run_index_2",
    "fire_rate_1.0 target_emoji_1F578 run_index_0",
    "fire_rate_1.0 target_emoji_1F578 run_index_1",
    "fire_rate_1.0 target_emoji_1F578 run_index_2",
    "fire_rate_1.0 target_emoji_1F600 run_index_0",
    "fire_rate_1.0 target_emoji_1F600 run_index_1",
    "fire_rate_1.0 target_emoji_1F600 run_index_2",
    "fire_rate_1.0 target_emoji_1F968 run_index_0",
    "fire_rate_1.0 target_emoji_1F968 run_index_1",
    "fire_rate_1.0 target_emoji_1F968 run_index_2",
    "fire_rate_1.0 target_emoji_1F98B run_index_0",
    "fire_rate_1.0 target_emoji_1F98B run_index_1",
    "fire_rate_1.0 target_emoji_1F98B run_index_2",
    "fire_rate_1.0 target_emoji_1F98E run_index_0",
    "fire_rate_1.0 target_emoji_1F98E run_index_1",
    "fire_rate_1.0 target_emoji_1F98E run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F384 run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F384 run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F384 run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F41E run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F41E run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F41E run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F420 run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F420 run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F420 run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F441 run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F441 run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F441 run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F4A5 run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F4A5 run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F4A5 run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F578 run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F578 run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F578 run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F600 run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F600 run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F600 run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F968 run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F968 run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F968 run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F98B run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F98B run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F98B run_index_2",
    "use_sample_pool_0 damage_n_0 target_emoji_1F98E run_index_0",
    "use_sample_pool_0 damage_n_0 target_emoji_1F98E run_index_1",
    "use_sample_pool_0 damage_n_0 target_emoji_1F98E run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F384 run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F384 run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F384 run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F41E run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F41E run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F41E run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F420 run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F420 run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F420 run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F441 run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F441 run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F441 run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F4A5 run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F4A5 run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F4A5 run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F578 run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F578 run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F578 run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F600 run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F600 run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F600 run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F968 run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F968 run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F968 run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F98B run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F98B run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F98B run_index_2",
    "use_sample_pool_1 damage_n_0 target_emoji_1F98E run_index_0",
    "use_sample_pool_1 damage_n_0 target_emoji_1F98E run_index_1",
    "use_sample_pool_1 damage_n_0 target_emoji_1F98E run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F384 run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F384 run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F384 run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F41E run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F41E run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F41E run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F420 run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F420 run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F420 run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F441 run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F441 run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F441 run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F4A5 run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F4A5 run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F4A5 run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F578 run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F578 run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F578 run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F600 run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F600 run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F600 run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F968 run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F968 run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F968 run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F98B run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F98B run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F98B run_index_2",
    "use_sample_pool_1 damage_n_3 target_emoji_1F98E run_index_0",
    "use_sample_pool_1 damage_n_3 target_emoji_1F98E run_index_1",
    "use_sample_pool_1 damage_n_3 target_emoji_1F98E run_index_2"
  ];

  private MODELS_BASE_URL = "http://mangold-ga-models.s3-website-eu-west-1.amazonaws.com/"


  public getModelFullPath(folder: string): string {
    return this.MODELS_BASE_URL + folder + "/08000.json";
  }

  public static crearModelo(): any {
    return URL.createObjectURL(
      new Blob([`{
        "format": "graph-model", 
        "modelTopology": {
          "node": [
            {
              "name": "x", 
              "op": "Placeholder", 
              "attr": {
                "shape": {"shape": {"dim": [{"size": "-1"}, {"size": "-1"}, {"size": "-1"}, {"size": "16"}]}}, 
                "_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL1BhcnRpdGlvbmVkQ2FsbC9pbnB1dC9fMTI="]}}, 
                "dtype": {"type": "DT_FLOAT"}, 
                "_user_specified_name": {"s": "eA=="}
              }
            }, 
            {
              "name": "fire_rate", 
              "op": "Placeholder", 
              "attr": {
                "shape": {"shape": {}}, 
                "_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL2lucHV0L18y"]}}, 
                "dtype": {"type": "DT_FLOAT"}, 
                "_user_specified_name": {"s": "ZmlyZV9yYXRl"}
              }
            }, 
            {
              "name": "angle", 
              "op": "Placeholder", 
              "attr": {
                "dtype": {"type": "DT_FLOAT"}, 
                "_user_specified_name": {"s": "YW5nbGU="}, 
                "shape": {"shape": {}}, 
                "_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL1BhcnRpdGlvbmVkQ2FsbC9pbnB1dC9fMTM="]}}
              }
            }, 
            {
              "name": "step_size", 
              "op": "Placeholder", 
              "attr": {
                "shape": {"shape": {}}, 
                "_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL2lucHV0L180"]}}, 
                "dtype": {"type": "DT_FLOAT"}, 
                "_user_specified_name": {"s": "c3RlcF9zaXpl"}
              }
            }, 
            {
              "name": "strided_slice/stack", 
              "op": "Const", 
              "attr": {
                "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AAAAAAAAAAAAAAAAAwAAAA=="}}, 
                "dtype": {"type": "DT_INT32"}
              }
            }, 
            {
              "name": "strided_slice/stack_1", 
              "op": "Const", 
              "attr": {
                "dtype": {"type": "DT_INT32"}, 
                "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AAAAAAAAAAAAAAAABAAAAA=="}}
              }
            }, 
            {
              "name": "strided_slice/stack_2", 
              "op": "Const", 
              "attr": {
                "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AQAAAAEAAAABAAAAAQAAAA=="}}, 
                "dtype": {"type": "DT_INT32"}
              }
            }, 
            {
              "name": "clip_by_value/Minimum/y", 
              "op": "Const", 
              "attr": {
                "value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {}, "floatVal": [1.0]}}, 
                "dtype": {"type": "DT_FLOAT"}
              }
            }, 
            {
              "name": "clip_by_value/y", 
              "op": "Const", 
              "attr": {
                "value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {}, "floatVal": [0.0]}}, 
                "dtype": {"type": "DT_FLOAT"}
              }
            }, 
            {
              "name": "Greater/y", 
              "op": "Const", 
              "attr": {
                "value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {}, "floatVal": [0.10000000149011612]}}, 
                "dtype": {"type": "DT_FLOAT"}
              }
            }, 
            {
              "name": "StatefulPartitionedCall/args_4", 
              "op": "Const", 
              "attr": {
                "value": {
                  "tensor": {
                    "dtype": "DT_FLOAT", 
                    "tensorShape": {
                      "dim": [{"size": "1"}, {"size": "1"}, {"size": "48"}, {"size": "128"}]}, 
                      "tensorContent": "pLPAvdvulz2N1CG+lXwUO5c6nr18k4M9BqCKvXFDdz3RwBu+bUIAPoYNxj3aoDa+CICSPQtqrb0gpOu6CMNvvWX/mDwiuyA+rTqfPWwm7L1nLJ+9\
                                        2AATvrPmE76xyZ8+09WwPZHQAr5cCtg9b21yPMsO1r0gaQe+RX0SviDpub1OYYO++t8OPpHj4L1sKs8+XcSDPV7Ekr2cPGW+4iLZu3s7Lj7qcJ+9\
                                        Z7AuPoqV2T35zu+9kpzrPM1eyjwOTVw+ZqBIvuzFED4UkpW9jC+xvRmsEz7n6q88yTsePUI9lb1ZIJ894t69vQpX4b3SSms+hMnPvb14q71xIIU+\
                                        BG7UPSdtcjwahro8d0xQvuhpozynlQK+afgZvvqSvLzk8J49CbaBvrV9rrw4l3u+c3uIvWw+KL4oOls9uwr2vRRMIb6u6tW+K6sMPcGahL1DD9o9\
                                        yLqHPSn74T0sOle+u6nvvtO6Wb0ZhOU8XUKpvSs10T37GhI+zhvlvR8NXz7HT8i9eIRbPVPmmD3nvnC8YWFRPcGQ/7xN6pO9fFsgvvtiZz2Uilk8\
                                        34mnveGxr7vaZsW+OWGiPhVp+b1hMYW+oMUKvgQ13Lz8W2c989DaPRHhUDyl+62+Ff7LvRYLCr2yGyG7MNT7vXe7SD7iQY2+zKruPdVzAT6785a+\
                                        A7EOvm8nob0faAg8mJLSvXNu+j1AAQY+WV5tO9+jw72OyZy9m6nQvf8PnT7PHX+9g1a6vWChHj0pFl8+XcLIvS9mg7zRzRc+1DelPWg/U72b7FO+\
                                        VRstvkcD0z7m5F2+bZjpPcq4mb4VjyM9my34PSXVET674Fe+GcGrPfFdVz5CoP69W+YVPiFkDLnOWAQ9PvonPlWVQr2YZKi9nJ48O8lUeLyYH968\
                                        RFLjPaeqFj5JtIa+pyk6PlJ5ED5tqgC+TixBPUcaq74VldC9NqaOPqKUxL3j7Zg+bPZ4PX5nqj49kOs9q/B4vczIdb6/qmS6ZkYsvo6Xhz3Lj948\
                                        xpKIPVLwXD5Meqs8rCMvPqeZCr4TtJM+I+xhPSRsbruRckI9hSGEvTHpS73qeq89VmTWvSnyLryU+E2+mYTwvarJKD65jIK9wBsFvinIxLxK9rS9\
                                        oBmpPRh6HzvjC3o93IwTPsI7Kb6jhhe+SlgJPoMFCL5qRa+7lPFvuxcMYz5DKFu9JFWNPfxwRj4pHDW8pLOpvd/TubvLjqi9HTUdPZlLMr3D6zW8\
                                        jX1BvV05xTmCYdU9XsZYPg8S6T2f3oO9YlZhPZYZAr7aK5k9R6IPPpCNgT6qmms9HSGtPF07OL5ldPq9aYQ8vCNIz7xDVEg+QfEAvTPErj0MuYw+\
                                        aQuJuw8Lib4Ljgq+paEdPtnUJr58uEu+e/pAPr2e6r6unoO+xC+EvX2qwr6xx+y9nQbiPvnqeL6286U9pkkbvmcworxHtqw9L1mSPXbAtz1OFdu9\
                                        bV1QPNbIq70dcky+kojIvRzBGr7CrVC9quKSPTxi8T1F6am8DaqEPQDvu7yopzE9sD7YO3cx0D1O5ES+fJ+1vC6vLb79E4294UVjPlZXTL1zoxU+\
                                        YsoBvqhDlT3GbmE+VCVtvjImTz7V4cm9hfPjvMOgkT5+gIk9I4LxvezrUz16pI69ffY6vhk02D34m4U+oyIkvYs9VDw5krg8fOKlPo86cr15H8i8\
                                        Dz3cvcU3kz1AHIE+2R8Jvm/7zr0cnEY+rhvMPVwRtD3jUxI+PQXNvUKw5LyL7FI+OLZGPm5Yjj6udUa+y/lTviNkjL7NDy0+hAsovpcQnbw0goa+\
                                        WXxdvd6SPL5+IYI9wWygvaFxsD2ihZ69+Ka1PVdH8j16y2U9E7hbPYl/mb6i/0M+ZkQHPZYeOD5ejUs9G/gNPp5RtD2p11S9nX8pvq3qPb4B+H+9\
                                        Q/epPVutKb3yO4E9th5bu3GyEr4WVCW+EyVuPTRMpL27XMc9ig2dvD7xBb1UbN+8K2Aqvutvuj2eiLq7y37IPS4oWD7+nRc9CjzKvKRgHDw8vYq+\
                                        JRonvnT7Lb45q9W8XXkfvg2zKb6pPDq+mYbevaAeIb66oUo9J2AYPix7FL6st0S+jNnxvHwXUjveYya+gFfWPWBW8b0zzz4962NcvtrVoL4Blse9\
                                        lcsCvp4fd750s4K9Y7UyvtlYMr6/cbs9mRDDvRWA1T0Bk6E93EnOPVuz8D0D0B8+CHKFPY4JGj42UCS+6TwTPvFYJ7w/STK9i5cbvj7tM742iiQ+\
                                        rn59vK6Ht72TgRW++3TRvVVuEby/aH2+/czdvU/JW74VpJQ8AeryvSuacT3F9DK+LSRoPQUi0zwwQo+8Iti2Pe4waT6nczk9DupSvkYZozz433s9\
                                        nxMqO+KSUb5goA++TbPPPGNEo7vN6CS+wDRFPkesIj7ShRw7gEccOuz28Dykr5q+wWzjvURZFD58ywu+UmIsvUPK0r2ft4G+j9kLPlHsdL0MKbu9\
                                        fqysvZFkWD2u8sC91CutPaYvLz45fwe+KipUPqh9eL4j4749kIU6vmL/Yb5ckAS9m/O2PBk/JD7OQjO+lYCnvvfWmD1rIzk5NCgdvpDxnD0uMlo+\
                                        ahYHvhZsmL41hi4+fy0MPT1iaTxTjLm8WUGku4EBnL3qDbc++KcCvo0zZr6sJ7E9p7TXvYr5bj1z/fA9zA46PVhHhT7m1ha+oqpEvJmAjDzLOBQ+\
                                        Ox/QvUm+hT2PVoC+wPmdPBwHSj3Q0mY+Vvo6vnvSJTyq2mu+V/fIPBl2wLwj7wQ+khOIPniPqDuxvxa+IrkBvsVoij7r/oW+DJ0uvv9Cdj1RkdW9\
                                        mtUSPi7kcb0Dk3o+OqbNPSaoer5/Sgc+aT8DPljH3rzafhq++YgXPl7cWb0L07Q9+2j5vJFcHz5PjI+9nu+EPjznBz4hz829YqE0voS5hr6+btQ9\
                                        Kd9qvZtLKr7Z97c9umr7PPNH0r0XNEA+3kwLPs3+Cz1W44K9IO+HPqBXVT1OQKg9YshIPR7ipr0idj49JK0tvH4zAb4nj+I9qJUjPslDrD1idZ09\
                                        1qJXvnQ8PzwhWy++RPcivgyg8L1bn8G9K5+vPaJiLT1knOk9Vh2svPSU0rx9kpM+GLgFPv6whr4qGI29of6PPiYEIz6t9li+nmWDvQICnL0q1jK+\
                                        FrqAPDCmhj5v3129mu1AvrMhl7100wk+m9cEvR91dj2Is1Y95UCSu6/XJT4ksny+vWegvdCvBL6NhY+8rx9EvgJ5rb1EZ+i9Bk8zvqBav72s+SE+\
                                        45shvR+lOj0ITWC+OS3NvdhyQL6dV609eYKvPWiEzD34lYG93ZxLPs+GmrwKx6i94qzrPWFBHT65vLi9oU6KPWMVPL7Pq/c87zB3vXmXPT1MSb88\
                                        D74SPS3Z8L2Mctu9Y8ysvUKZmL25J729l1B3PvRbeb45T7y9Z13jvTU3Hb4G7/29hL7vvWump73RpN695B6rPelJ672S5Ti+z4tePdPcWL5tZHG9\
                                        RGY1PW62Fj27PAA+IGa+PMagDz5RBr49E1d5vtiRDj7iCQ49YkAlvsOpvr07r4e9A+Gqviw36jzJkEu9PGg3PhBG3D1DtB++1yyEPZWBvDzQJvE8\
                                        w9efveazTL0DqUU9jZYUPjp45r3s/Km88JBIvg8gvD2Bm8c8k3AiPDdFQr07J3W+5+nzPU0ctD0mw9K93/kYvjJ2Vr7CAtI8mxYmPa0y2T2phAC+\
                                        nU7svS19drz/1B6+wdAqPtDZ3r3saQM+1aA6vUoDID5LBIw+L/laveKg2zxsL04+axqkvX+ZRLx8jTS95IqdPV1fnr6s29w9BgIwPt8izr2Nhry9\
                                        gR6AviZTaL4Hu6M+gNfZPTk80jwbXXo9kcIQvmN1xD0qNRQ8NledPFCobz0Qh7u9zBdOvmx6Orzgeg89NUKEvadtFLzqXY292ApZProqVD1GO2C+\
                                        FsoYPgMZkLxlSEK+0A/rvSN02T0U3BI+2+B+vuqbIz5XYpa9NLnXvbaM0b2fhqY8vuwPvOeySDpTURi+xFSavZMiwL1S+qU9c8x8vWMLGL4v/Tm9\
                                        YP2EPF+Vbz5uBIA9ozMovl3XFLyC/LW8akkYvRuHsD3X9ka9pVrNvbAPIL7P3Qq+IyUbvg+Cb76zCC495ZOFvvZXpr3yYWG+LOuRPV6EEb2olCa9\
                                        Fpg6vlSodz1BNa6+hbq+PtA5wz0ruR2+3xDAPffoA75TljY+0NptvFvR0rrFabY8KaikPMFuvr3FNKK+xzgpuxarLT7Yfz09NxQ+vbOJcT5m8jK+\
                                        oB2JPl1hYjw8xE8+D6WKPv8VCr5D4bm+Dfw6vnx+Zz5CUui8ACJQPkajPr0SdpK9IgxGveWiwbyyX/49+OrrPfaYubuVFeG97x79vdQRsT1gFpW9\
                                        iF+3vQYiKj4yIAA9AwhuPTwON76x3cC9j3omvhdmIb4J2Lk9yUwFvkiPY75I6CK+/ThQvjGXDjymNsO9ONcivbIpBr66MQS9a95yPeaeRL6oo029\
                                        sgKxvquWvL7HQga+LEhJPha6OT4mw5C+W3xavkagsrzfDsy+1YqPvtZL5730/ek9Z2LYvkFnK77i59M9r0BevijT6b2mVsG9gFGiPfOlgLzzDJo9\
                                        b3lBvjsvrT4+uIU9fgbovJiSnzzE9CS+srQ7vXrCxb5BMK6+5mwjvmEiVL4eHt68pQ3CPAUm0r0oFwc9Dp0SvUXVV71sVNC9gvqOPmr3gb5u3xO+\
                                        quimPbqFDb7Ypii+pJoovvlKmb7p3Wq+LlduvfcFoz3UPdY9F7QLvjnBdT5cAw49/SQ2v4f+X74W+zq+ilRtPh47i76C33e+mABMPMBFijzaszm+\
                                        OLiXPupHKbz6UZE+gGRWvgbTrr67HtA99s7dvcrnAb6qp+k7t2HqvTBkzr01T949mttKvlNKhL0Fmx49YQjIvHUWDjxwfz++kcfkPQSn4TwxRRE+\
                                        ByiBPndRtD00KEU+vf1QPmBugL51UY6+jFBpPRN6gL2zoZA+wUNdvUicoj2a/Do+HrIXPh5AX77qAbA9COCmPrdHrb2ix1a+uTt6vCovY743uz0+\
                                        AZu5u0dq1D0vZoU+amkKvXuskD0xhRM9f9ofPh4zU74DeQk+ULevPDVG2z0kLA0+7eHIPEqrWT7vpIg9GOSjPYhPpL5GupO9hn1vvmA9J76MZTK+\
                                        +bkiPcrkxj1WpiQ+dr8dPhFrQzz1WE89LPPZvCjvTb7LBWW+4bCGvuFoMz7jupQ9DVFmuopJjD5rbk29DG48PuwHDb7LNn2+j/UwPjy1fr6J+u88\
                                        N/yAPhgoWj4R822+jNCbPGo8J730IGU+AUWouvjJDL4xYDC+nzAdPre9UjyhQ8u8SjzEPV5tbT1NGgO+paqsPuqSDj3Vb+S9RiznPTEITL7kG/K8\
                                        cqmUvlC1jr500yY9Nxpzvuh02r3f27k9XDM0PjIzk72EGIQ9OMBXPih65D3S/l4+0EHEPaLCVb7/KAg87Ek7Pcafu70J9JG8kb0QPrMg4TwQhp++\
                                        EN5TPZg8hb5ibMY9nUzyPl06zb5kW06+6qsKvqubGj4vBgC+KgdpvFGMD75WX/I9XGBBPuY/Yz7r6bm8wptLvrdb2D2wFGS+blSWPnzjLz5c3Mw+\
                                        ezwFvlFg5D1ZbRO9UBoFvVbKDb7rf+C924oMPnQ0Zb7OMeo948hlvlxCFT2U7bs+FjlpvuJX4jvsNUG+Ak39Pf/xwD3nk0s96LH1vYl2GzyjK4C8\
                                        UF4qviasED7x3qO+a1mrPVh2qb0Q5xs+bDvEPcrwiT7wd0O+6KYAPgjOBb4vVE6+otWgO49zT7y+c7o+jJEHPZNhTT5Vr5u+rz57Pt7PeT0+jZK9\
                                        ea6UvUToET+7EaC94NnoPlJyIj5J00s9ubC9PBeIs74RRoG+5rJnPb3zi72bjt68tWwJPl0BSL60Olg+mBJmPgNDiD0p//29zQ4evqMmR72Bt6g+\
                                        5qk+PgKFhr53PWE+HCunvVA/qr1s2vM9swtiPhMLjz73CQU+N0BGPWhJmj3hAMi+MICzPdwNnL4CPQa+dep1PegkBr7ziX0+8VjBPW24cj4ToaY9\
                                        VkH1vJBwsD2IrMa9HY1BvRAAfz1nyD89ZdVWvq8MZD4XNW2+SyKbvmcqrL0SmKi94o/UPRV6273JfoM9nyaPvSCIJz5225A+uPVEvv/yOr5A28g9\
                                        TkWOPVa06z0oW4+9kOExPtFggj0HGo2+FQ7SPTDB9TpPC707DZJUvm6WzT0Q2PW8SEr1POE217xfaT2+H7EIPjf4NL0CD9I9VD5bvuvKNr2+Hxc8\
                                        N0G+PNwjS75dcC491R6wPTODcr7WLkI9TT1Tvpm9CT1h5FY+aNs7vqtyUT7nJw++NOEIvncQAr42hOQ8RKePvZPM27zYLow94Mpjvma5U765H1C+\
                                        AtSRvMJHb76PIX29YqKZPdUulT04RlY8hAsvvPTvFD1I3A+9duWOvYynNL7KIrW+dzwOvoXUib0Z8Ym+axpKPcFjFr36r9685WuavHztmT2Ej6a9\
                                        faRAvg5h2LwIaAC+wZkmPvz0gzxorPW9Rk2GPH29mTsvozW+yTlbvVbKoz2XL4o9LWsUO8lIhr0gESe+LJulPdb6Yr1P+Eu+7IkFvi+y4DyTzxg8\
                                        JLwjvsyUvrypYwK9ywQRviokJT5V/jE+JUyuvrw29r23jLe9z+MKPrRZKr5dIre92SZ9vg5HzD286WG+Bd/qPeGwqD3FRaI8p2r8vYh5er74fzW+\
                                        fgUjvQOXwb2mqLY9ThjKPfWTLz3RKNg9VsHyvJxC8b1+eac9QCEpvB0QhT1Bx00+SvaUvczzH75DFZU9eSYDvgNUnL0lOhY9jYK8PRg9pL1+orK9\
                                        iQ87vWJ0XD7fT5M8PWyZPaGmXT47iAo9vLE4vrxPhbzPAIU9AVHZPYv9Nb4nMWu9ODcavdNzxb2Phka9a0oLveF6aL6eRMu9XdZEvZO+p719jAI+\
                                        BUWAvdLXtT201cM9D/+gPgp5wbwbM5o9ikKKvZx8Pb4wy02+8X4OvrWAlj1UHTg9uysUPvuXl7njjmI+lfEOPitD8rwE7RM9pnj4PSdvID3Eq189\
                                        QFqJO+2tjb0DF5k94bgZvsF7WL7fRHM9mUZAvgU0CT1GbMI9LrfxPSCyWD4n6Y099OgivWuqgbzvcAY8Dtp1PhHwOr4wRA8+QeVRPsLbKT51gPs9\
                                        ER+jPZRi5L0IAWI+45xwPdwTqbxPtSa9xc6LPmVyyzxbVYo99xQMPZ//mr3BDQa90XUoPqMWxT264lw9S0llvDqibL4GFWC+NihWPQprhD0wrg49\
                                        65p+vZMfKT4fiy69LDn7vMlfHD41/JO9gliBvmOWT73AjEc+0FrwvSH5Az3l8Vw+WqGkvbQQE74o2f29H1WUvp/wJL7bQ1O9vF97PVEvCb1sXR67\
                                        FkNHPLvc+rxl6um9bK4DPhQOKz38t289m6WDPdEARj5jMwE9nubfPZ0szrwG/O49c+ADvp0+9L3E7DE8LP0YvqBPUD522IG9UKLcPOxDL7035ye+\
                                        SLBcPgnfubzFAvo9gMAQv4n4GL7B6k6+WzgAvSGi6jxSEdS9BhJ2Pg+cmryF9228yFHqveBPLr6eWxy+nZ4EPgJZ3733gTG+B/HJu9WBaj7QWkc+\
                                        WcrLvQabF74s+Ku9UArLvYgXmjzHzry9wqSYPVfRGb42PKW91ySjPZkW4z2vfXq8fgaXPQmTQj1W1L49F/uAPLzHuL11zd097kqUPJP8kz7wWcU9\
                                        t+pBvghDvD0VHkW+SlMbvRD7Nr0uate3xfhLPWOUVj0IO++9uYqlvH68Yb5ro1O+fJaKvjGGJz4/1qO+MBWHOXACOz5cyX0968lyvo9yUz1Jy5u9\
                                        qFWCvreg6j2bOi496IZVPtrDlz1k7iy+p6sHPkk7RrwxBYE9OptQPQAZw73SHSm97pFOvs5zYz11S6k83Rm4vfeqyL2+ufu9Il8lPgNoK76Tsfq9\
                                        nTFXPcxAG75UMLU9leknvj1wcr3TvBW+3/uHvv9fI72XOnc9Z3NTPlbGjDwQuC2+ba+OvZqJJb7sb8u9aCIKvsxNSL1vf14+jh65vGq9PL7UUMI9\
                                        IhoRvcCNiD1g8ai9qV01Pn97Pb5xP6a98SCKvmtjkL3IUls++DeWPfIUUb0fWTK+ryP0vVmKZz2qKY095xAlPrulMb4fLBO+6S7PPKVrKz1GhRS9\
                                        VgE0vpDTLr7afyG918z4PN2xWbkObRa+eDwwPRRJ6D0V64i98kyWvd6gGz2Dq1w+tIQpPYbZoz3zLVI+e246vt8CMT6THxW8L7MoPuLSk7wlwsC9\
                                        RfYkvPiwRT1wYeU9EY0VPvbU2TzrmSY9IbG0PBoC+jzGQ/O8Gc3LvR4hHL5LBkg9+5/UPRLs2z7aAog78mG8vWZsRb1SiwY9u5y0PQMbSL3C2ok9\
                                        FvJRvSNvpD0z+6A9El7HPSK4oT4GqEO9o2i+vUMyMzxc2g282tDXvfTyxT1Hxt89gCzBvQYKRz1ozsE711W/vSSiTL3a+fS9GJCVPsKiLj5xojO9\
                                        elNSPjeY9D1L84y9JmsWvd/HJb42gF46R0GHPZkHSr3Y5RE+Lcw5vixOMj3xFRk+00MHPiRUKL6BpPk9DI25vTB4D700OQQ+oFAIPvdDPj5I/a09\
                                        E6fHvV5IEr50TjW+SEUovnkqJD2DUE4+Av4Ivj7E5T0cWlO+sw2vPb/yObxesli+TSYIPmVumDxGyNs8FPkLvmhBBzsQjs69+8P0PQ3Nzj2uNz4+\
                                        V2AlPp8Wgz2whcu9vML8PMum/z2qGpM9ueTOPXvkHL7gDJA8vd73Pf1VHL5daqy8NV3YvBtnBT0X4fk8NmTIvOkD0z16Z/U9MV1UPkziTj3oqCU9\
                                        ie+MPtQw8D3FtMo9PH3FPeA3sL2EV1e+8cQfvW0X6DxyLo2+djgRvmLhNL6aXDo+82LoPuS6Ab5K7Y++Qea3u6U5JD4Gwlw95airPYPJ7bxAN9I8\
                                        pcZwvtQnRj36im6+okumPtPxND7vyHM8yXHJPXx/+L0u6T69794VvVRjqr1opx8+UHUNPiv4LTxj3XA+hZ1PPDtcsr272ZS+JQ8FPsAYcj3bYpe+\
                                        l1qZvbTtMb1dgDQ+n/wZvgb73D1l3ke+H//jvVshsb3Kiic+xzeOPRkR872gAt89PR9LPo6bQT4BAMY8ff/xvUMGOjwchpS+cnNwPkObrT680Za+\
                                        bjKAPPZy0j2hbUE9vLNEPVkBMj1W1fi9HcWkvVVv1D6fJ8M9EsNJvhIX9zzxKa29tq5vPmAxWL5OfLy9NkEoPhv3TT6NvTo90To5PnNceb45prq7\
                                        VGg4Pu0V1b1zLEo9nLRBvoXGcT1B0EC+7NkEPUIo27yorZA8gaZWPiitzz2OzNC9X99oPtFn3z70hea9FJKNPrbFrzwS8aG9ILKNPIjSBDuzEAY+\
                                        0axgPZ5QKT5TkCU9kBanvaTpKL4OR369P6YnvlQ4gb5wRVu9SrPjvMwvmz2uJr49uw/NveTIJT64+/s9eRC2PHe01j3wPry8qCYqPfQWIj4do+m9\
                                        xYJzvrGJTj6JFe08RYx2vkarSD5qzR2+oViCukuUMr4Ohms+kJs9PjTgtr3WVCw+f6E2PjkweD7FiYo9SVgtPNuvJL6Z8JS9o5FYPJAnED4yA5a+\
                                        m20xPYLT8b0NDdg9W2NsPheiHL7TpVa+GPGzPXoNQL6kUYU+/xFMvpFUKL4CnFA9CHnOvZfm0z2kPf89s5uTvdw00L1faXc8oOCOvcr+970tVYi+\
                                        yvwDPclczD0tZnU+w7q4vfo7ar78BkO+SSAMvqoahT3b8ac+RWOyPdHKs73rWq+9ULdKPNGovL1ZY4W+ROClPjrEhL1D9oI8X819Po59or6XpWa8\
                                        npcSPggJA773u9M9MBY2vM1ZgDyYlzO+Np5MPrcTUL5B4Sw+msaVPmN6XD7GSSm+uhUuPqIqJr5zSjs9nIqzvk2cOL0cNgQ+MTjcPdvI2r0LeQc+\
                                        UTcPvsdFP77JNyc9m8xUvqvrUT1zqa6+VpBAvmC5lb0a1Si9kX1QOrZLez6snKA9NBJfvfKhrj0A0zU9bxzjveJGwL5Phg8+wSq6vr4aEr70eAE+\
                                        P+EpPlsu2b2USng90zqVPfQIhL7nv4I+s3uVPvJ+UL5TmxI8+BHqvW82ML4t4a09AjI5vWLGZbw11II74QfBviwFYb6fVze+RVPyPUYehjstoBS9\
                                        xrfJPcICIDw0khM+rz6TvsHVn72VBEm+Jxp0PTuGfTzOPJC+SD/bvc6pt708J1G+JqbEvTROtL76giw+OTiOPYdda71Fe0Y8hpQBviQ5H76DyAS9\
                                        lJMyPQw08LyIjXy9RfqQvcIlFTyXewW+bxvyvW2cSr2gkzm+RnviOyduUb3LYaA9W2TvvfgcVb5ykAA9OWUxvpKXLTywmUE8MOl6PLZ++r2k2uO8\
                                        vf7Xvfd33D2Diic96KVcvjY9Az1Ud1S+YdwJvmGUAj3XrD2+CFGSvQJsJr3rW22+W6oyPiwS4r2mukC87pauvTeO/bzl2pu8/AoCvs7TrT1fsEa+\
                                        UmcjPkp8Vr7Etse9NKUWPoxjWz5o+yY+i3P7vY5I8r17TPu8Qk2ZPFjhAL5jy2S+y323PSJ5PL71uA+9RyQ/vVfg+Ts5rTo+SrslvqJn/7pKdpm9\
                                        tjyMvZgJur3/hS++oS/ivd4tLz0BFIo86WoqvmIuPrxoZZO8blwYvoAXNr5H0Mi9vb2evksVeb1BAIk+ZG1mvs8pWb0fV6K9gV93PVQPNr500Xq+\
                                        EBrevIi7Fz0S1J28ES7gPaaXRD00OVS9byEKuxUk9b1MbvW94imePSI9H70F0Dk9HX93vj/MubkjMBS9XNwPPvqmgjz4jQg+pt9gPVEOf74osek8\
                                        4WwWPul9vr2TVRc+FpCyvZwkD710KD2+eVAHvhZ8Ej7IgQK+uNaWvpE7OT1wRTg+a0VhPukOmr2ItE09Y/aNvX+3Nz10Xq6+3dcSv3WqbD7Ovk8+\
                                        2EpAvo6wQL371Fe+yTzzve4W+j0SkyE+HarMvRThsjyQfdI+l2THvGE0cL690Y299xrKvQQDmr2P4vo7hYHFPS3K8D2sOom+jsFZvtC/VL4DrtW9\
                                        5isKvoy7dTzaq6Y9aWfCPRkfPzxzT3W8wic1vpAWgL2ZCT69rWvTPHQRHLs+4js+lHpFvmCaeT7DkCO+MLeCvbRpFD4qbm++uqC6PRMen7yhgMA9\
                                        XgEuPsg5Uz6KV7g+QWW8ParnHb7cKog87v93PkQolz2DovQ8jYgMvjHYfj23RI2+FCbGvJR01z2zlnE8NA/QPkfXvz6k1/i9eDa2O12PNL4D+MK8\
                                        70YCvARoEDsNRMW+9X8Tvl7KHD2LILO+xmgWvXANH76gF0m+rS7KPT9qcL7luyM+HNbOPbKeO75sxwO9FwH4vDuGG75s4GW+m+tqvrnbFD20vSQ+\
                                        GpIfvuSRMT4GSmg+Ue7mPp/E3r2JK+Y9OrGAPVVE672/M40+cQNKvuYxJr2/AUg+X2GkvU7tgz7prK+9KeVVvfP2g71Bo7G8v+fOPfzwlD3f4nO9\
                                        av6XPrJntj2AKX89It/XvntN0j00KY8+X3ImPFPQfj6nzzS+oauEvjxvmr6kc0O+yMY+Pl6TlrtCH0q95qdQvjlpDj39O4++Bgc/PWCK0b6rW2w+\
                                        M+6xPqOx6L3VflE+jDH5PruqTr37Gii9iohnPsgaRz713W2+6YDIvqtkAT5FYxG+oGGGPjxLBj0qPYe+Q9SHvZt/0T4B/tY8JK4CPnQO570IwIm+\
                                        wJGfvpe/gT6uMyI+C0M+PgSXiDzk2AM92P6FPneR/b2SyP6+AXKevm5ZMb7aExm9ePhcvj1BND6OTzg9KWilPU4FVD7LSlo+d1vhuwSuQD41yWW9\
                                        mv3wPhfylT4RThm+0td2voqxOT6SDVK+G5GsPecEc76N5eG9S8K1PM/Sbj3ibQw+jF6uvdKTGb7oszW8Or6APW+pBb7hHFg+/7eCPuzC+D18hQs+\
                                        KI1FPokbBD3+6Ly95wcEvgmlo741JOm9ueD4vM+DS77ZCdw+AfE/Po3IFD7htlE+MiMBvnUV0TylRDO+xZICv4Z+x73qt4e+j58uvXpQzL4xDwa+\
                                        DnKIvqiLBj6P9RU+wSKQvu+FGL7x3SI++mM9vbKqzr4kSe076kWYvpCTWb7eFU2+9i6TvoiRYT5ZJrE+2hydPY9sDL5KjLA8NV6EvcHE1z1+t8K8\
                                        BYZ9PKbQ5D1FVbG92IgePolXjj30wmM+GkwGPqBLhj4eQdW8r24oPQ3gqDvqABM+CqezvRw6L76H2y4+uEKsPA2aSj3hI+C9vBwnvdFHCj5IsLK7\
                                        3vU1PoPCH7zcIsA9Qu3nPSb+Az4aLWE++uaYvWkEtjvR5bk+24jnvKotnT26ZZG9x67tPeyDwT3N9EK9oHI8vZCiUTv6EMa9bJImu7YAqz0JCcM9\
                                        H16lPHU4tzwGyK49J3Ajvs9vnz2t4hi+rhzBPE62zrzeqwW+2kGKPLvHOT0/pv+80iNBPWENMj0qMgc+p+BkPiCnrb3/r/I9WVFZPaKSwz1KJ3m8\
                                        mRSCvnp3Tz5oMEk+eFN3vpgrpzzHqV++akvtPcCcqr3UjBW+q1mePQAsBj4aTl8+ieNRPqpPpb1lQ5g9/K12PvBsbbzsmSQ+pYOhvGkkM74ickE+\
                                        up0APjKQ8zwo0x89TeQQPigHgz1hr7g9v96PvL/3Kz6JWSE8gi4/vhv0DT45nvw84kE6vlrKsz3G6yU+OGUbvKSODrzbGuC9AKNhvWAJmbz3Fkw+\
                                        JzWGPRoQmr3nMSO9tzoqvpEgG74ByQE+NgUivQey3ruRbdE7MpaJvXj4372h+OE9ZaaRPkXHyr2I0E4+Q+e/vXEN4DwP85e9HJMxvnizPz1ADxU+\
                                        jf49viT3rL21m0499kolvg7fEr6QOiQ8F/IwPdVT5T0HQc29J5SaPrO+gbtY9hE+MTjoPfEzuD1rvqm9CmqvvGIAPz6QSSs9v6mZvt8J1j5yZAy8\
                                        Mi3FPXfHFb5yrFE+3ZjTPr9ybbxq9Ia+3f9RPlb7tD78TZc9g+81PKr0CjzXrgc+KKvove6VwT44djQ+C5NMPHHDuz1DIyw+SBZSPu1jHj53fSy+\
                                        PLLcvt5DWj2BvBC+gw+DPpwn5z3Link+mJHPPvutHj7RK3c9A4+JPveODr4Og4k7s9aPvk+hq72xNWW+aJuwvI8DmD6NrzQ+SZq+vO3dxr6Wdcw9\
                                        XRm/PeUzf75+u0++mDSLPrbYWD2Cg2C9UgTAvvMDwz2JIze+w03KvRr2Sz6UooW9Zssbu21jlT6Ve3w9yn+dvv/Wtr1wl6m+k/zJvqhMwj5MvIK+\
                                        nqG6PeRuqD6In6g+/aC/vmwi+r3rIQ0+NzJsPgZ6v76dD7C9qX26vnLVh74nu5w9bQmIPt6TFL7tdms+HCuFvl+Lhr60faw+11WlvqHhCL99JvU8\
                                        CVmmvSIcBz6SjUu9j5gCvigz5r0ordG9b7DGvFKcVb1yyMq+6Hdfuob6Az7Y8Zc+8nAKPiKXgj4FqH09/nogvLT0kz0NZvg9YQKQvW4JWLx6qWA+\
                                        CIK9vpS9ID5N9VG8cBbuvZwfo71RTb2+u31aPnCCibw7Hoi+u11oPYo+UD7FQ0O+38u8vf+RkD3KmJu+YwCBvem0gb1gFUm+bEIIvuPqBD7vKAe+\
                                        dk8MvOoHzz7MYqg+t4SjPHth+jqOoW69rSedPNIfrD7hCY49fHC9vUBnr70nFee9tSnJu+5Bwzuiqku+DbgcPiC41T1itzC9dc4NPslktj0eAAG+\
                                        5jkBOgx3KD6NVNG9irYNPsWJzb27+wM+dEPGPBPjkT5lhvC96Rs0PRZccT5LaZe9t8GHPY7ywT6rh1S+HqptPsU60r1Oeim+rEWHOHhqZL72b2c+\
                                        WBJcPukUCj7WhIU+hW9hPiq1ST5pwjC+bZ6FPo/pJr5Kskc90j23vUAskLxQaIs+cabJPcDOhz2HyWw95YVTvkawq7ymsLC9lRcRPMzQd73C7QA9\
                                        LowTvk4Dor46ygK+gJEuvjGnPz6ozsY9QBW0veXQSj29XbK9T7P5PeQIWz4L7Be+Ox+PPQI52z6QqXC+fFQ3vRhQCz2GKiE+vbqJvbc1fT3m3li+\
                                        2EYBP3yETjrgBTC+f8uKPhhrmj3AamA9z0KKvWnnJ72mcUi+E5KIvtA1xD2VjsK8Vt8qPhtCUj1xVge+Wk+6PXVdJ74QpwW8VvBFPnzFjT035Ie+\
                                        4PBbvu/8wL0PLKs9YIDuvehGpD0A5K29/BSOvcDaiD2E2O49ye1JvrI5ur0KDwW+G05ivhHQbz4HsiA/7uWXvtRB8L2z4PU+z649PvxSZz7Lajo+\
                                        V3uGvn3pHz0TOSK7XYbbvSwMAb6Bn0C+N2ihPA9jyjlGDAa+9VJivvpRfr5bSQ8+978ZvCffIT23q8w8IcR6vjumzL2MknW+ThQSPH8JB70AfDC+\
                                        69oKvKrP0b2KYB69V1SAu9z8Y717neC7YEepPSm72jya5JS+pJoZPuQWb71NZAu8HWUHviDd0b0SgT89yFk5vrPlm75iNqM8SFKSvt+lYL7i0U29\
                                        tU8kvkXMCb5PUka+rQwCvctypL7wywa+pScFvWv/Hz2haMe9uG9nvtzb170vsD6+VfuZvJuZgj1j2JK9pBUpPefIYT1MUdQ9I8iYPUdeJr567cW9\
                                        gc0kvo18Yb0IX1a+IFjaPYRoGL7hazA+tG1VvLXNCr7UwhC+jx9CvLrMA74lESe+S42MOxREPL4W9M+9RL+SPfAOtT1MKIQ9UMOLPTy/Eb2l3Rq+\
                                        vDlMvP2/Kr56WJO+csL0PQXLgL1Vx5c9EYFMvlg4q72fspO+VFJSvcTmuz0TaF2+umS1vQ8Zjb7qvys7qjBJPd+7yTuMzIU8XazUPCBCqb5hSS2+\
                                        /PB6vdRoGz2UI6C9sS+Pu1rXAz7P5Gm96JR3PQVL+TwgUFM9YG41vu7Uh7zApD+9ugcCvkx2Fj7FEhA+PEMSPplkgT0Lbry9lxQMvqDx7b3X1gI+\
                                        0zZ2vXylnb5DH4w+6/qgvvyQMD63aE4+dy4JPcKDhr2bD4s9vyMJPSnGo72kv5e+P3mCvlsrZr4Hz7O9zHx8Pi4Oaz7apGw+QsBgvvviZL5/AV0+\
                                        GxNIvosFsL3TIRu+tPt5vkqMnj7ra7k8VLPEvfI7Gb2g4C6+UZK8O/fJbb6lGDI+N8k4Pbl6yz0tuRk+vN0fPW5bkT1DIZQ9zQH7vHQa37y0CZ+8\
                                        qRkpvvv8uDsC1Zc+/vjXPYS/Vz4mFBG+RY79PA8LLj15FjC8xIRLPjgCCL5W8FK+v9qIPgjjALw3BDG+bZupPg1kXj4DI/k9VsmFPuOICL7IyYi+\
                                        ltIYvNK6Jr6SlAO9O4//vOnnxT09jgS+nnI3PiuWHTwG43w+Ea9yvaunObxmGY88pMVWvposXD5oT228pNQsvc+hWj5s7RQ+gdvDPUgh271HDW66\
                                        ogrSPh86l71lHYu9Co6xPiaxkj7Nqle7y1bavazsmT6LeE2+nU+bPNW9GT4YcfW816gGvoDXKL7o5Iw+P5iKPm4jXL79ZnI92xg8PR1xx72sl6E+\
                                        q2YAvfv/qT6L4VY+qdZwPgHquzz8SVW9U5jIvAuxED5rw0Q9XjFOvp0cPz3GBTQ+mF5sPpBiUb6uDju9J1G8vdeBgzvzjaY8uyXtPUsSLj4b3le+\
                                        o7rBPc/vLz6WSre9yI1ru8nhQr7/s1g+0yTEPUhuEL4CYIi9z+fsO4wlob1yS30+Pqr8vDASAT9l/kQ+1Y+gPXUCujyVdzq+Vf6WvpWavr1vahC9\
                                        y25iPsd32D5X+h4+X+3CvTHIXb6OMhC+XlKCvEEKWb4rtZu+dzsbvuJ3+L3lnGw8gDBSu/lGDb7okZU+QHqQPUEHVr578YC+355DPooZCT5GNYC+\
                                        UPMVvqFyUb58VUu+Eo4API9eXD5Sw689EVcbPmcMKj16paq+1VkwPj4vAr3tu6i9bW6GPnYttr0RcjC7ywU5O6amhj7Yeta9A8qcPTHArb2b+gK+\
                                        Iz7RPXa0Db7yZiC+fEmePep6pz3iXGA+4EaCvqwuQj7TJw4+oNwYPjGKhT4Gg3e97mNTvDaIdb6a5Mg9uF5hvk+ssr55mSe9kiWTPjawcT0MWk4+\
                                        BDUTPjhD6j1HknM+SslRPa5gHr0zY2e9sQZGPShOij2+Bri+h+PEvu1R1r4hG6o+a0wzPrlP3D2R2L89epDdvsFahj4ALIQ97zqXvrsyA75iblo9\
                                        jYrDvZ16or4aJJ498ElbPvEIND7s0ls+umuoPWUyE72JWza9SQg6vJQkJD5sYLC8VdW7PtJdxD1D5dm9C/6nPMy0qTx07RE9/piTPbF0xj5dd1++\
                                        1uBxPgAMC739jRK+RleJPNlhz7wibBs+ZXKvPF5KDj6OiIG8o7ROPkmE0z15/zE+LMLcPP7bFb1tbwc+xvudPa56Ej3hxHA+I6bIvbzRTj4yQWG8\
                                        Z/z/POvfbz6KW6m9w4OEPg16C73//9C9a8qIPSMQo7zWpiS86hE9vllj/z1PT4w9plcDPEW2Ib4jK7W9gkKYvTrVfj6FRim+VM1CPvu1yj2Kbcm9\
                                        VNdrvWgyZj40SGI+kxRIvM875T0tTAe+Ip4KvSdRvT0tDhs+UofOPTIjBz5MHFY+EpXNO18Dnb0fstg9HZcwPaTXND6P5zu+3gGQPX8FXj1UN1g+\
                                        r6gbPtvWlr3Y5qQ9ShEmPji6gLwbEJm96NKvPdl+Er6ryAw+sFRWvQnv4LsZclk+f/XOPcMO0r15Mvm9nlGGPj68E76QoS+9qguGOmvrc71TQHY+\
                                        cONvPplLGD6NIVY+7YuMvFKrfj6dcfM94yHZvabZuT3OpzU+22hIPkp42T0EUQg+75ixPLC0Eb5UnzG+uqSevNVvQL4wAw4+hO4XPp3L3rmIaba9\
                                        M+2IPgVhw7211rK9M4mQPi2/sD7XixC+vN8EvaxDBD3RROU9oauGPos7Fr3SjRw+GSYLvsP53T2tDgI+QRFQPupamb3NV2o+RRCwPUryrT7E7Sq+\
                                        sgxQPn6QJ71JBpc+rghuPvERIT5ZYO29JmrSvUHtOj2Kgn8+U92evfyn37y2kxy+BrqVvBPQvb2wnE8+xTLJvgW4kb551qo9BWsrvt3xBr211YU+\
                                        2z6DPm2H/T2Apmw9/PUDvuDtRb2SGku9IAVrvsNx2DzNgY++jqC9u9wIkTseRik+xejSPDVotTyT4mg9g4IGPR+kKj3SMdo9kOmAvUv7obw9EGs+\
                                        FFXXPHV18r2Pdyi+T3OIvQCRAr6pTcg9KXulPLrUC7xKKK4+JF2YvQA4JL5KkRq+8jj+vVyO8D5g5ls9IwjEvBBtb778T6g9pvdJvjbhCTy+DFK+\
                                        igqHvrnAnz78ska9J6P8vSn1kLybuSM+A2+fvfmoJ75z5xG+m3O5vr/yjz0lLmc9BJLuvByScz7LqWE+CcSYvvKqJj1o8/u8aCiUPQcQiD1IPi2+\
                                        GKrrvJ8Vn76CUVU+tnPOvisrtzzJYAE+WvRhvqGixr0HtEo+J6upvY3edzykIr892R0ovZhX6TvgiSy9P8uPPYHzJz28L7S+jBQPPgcGBT7WXJe+\
                                        bQgYvtZHUD6JCnE+pXBwu8Tr2j32kNs+YH2IvrBU871Joyy7mfCIvteP3r2Dh1k+LFVJvv3wJb7WKom9kbGVvAc7KL6V9dw7BRmWva7Cx70Ep489\
                                        03iBPDmQQz0TcKs9scWRPVKb+70LziW+g67KvWp3/T1XFC2+m6zXPh+5pjxiJZY9w94oPl+F0r3snOW9ta4yPc7kuL3+yX89wSeTvXzTVD1TMmE+\
                                        ig6kPlitNb0JZXQ8XE6KPrGYIz26kIW+etxdvVtLA7uSNxw9nUyUPusvlj3Owy8+Tax3vg32HrwNbhC+c1/6PElCPr2Qphs9R5ggOQCwjj0fdXQ+\
                                        +rMnvlawczwyHZy+CWv8PQf5+j1umSc+2rMfPh0Ccb679Fm+10cDvvTa/bywIJu9XYlIvj7uk72dTG4+C0qXPqWPPT57gmw+Tu4dPcXq0z16nBI8\
                                        gluJPdxbST4Tr7I90aUXvvaQBz5/WjW9qNRyPoLC1z4t6B++Sa5MPpFwpL42kQk+wF3lPf1ic732TpS+FA82PRJHkb4LdpG9EV9+vsnux70OuWw9\
                                        dsyUPimkNr3+mTW+LRokPkd9jT6ydSo9aFxmvjdwCz4SOoa+m7WWvsi6Yr17asA+4EYJPrMT/T0poya9IIqMvUzqsL5FSh6+rfmHvNbtJzhVo6Y7\
                                        gg47PmW1JL1MJTo+1+qCPQcZg76Ayb697t+EvjYI7L1Wdh++6UX5POWYUT5XLYI9EjKBvcyRsL68RQA+1O3KPErxDz4n2FW9q0WJvX/pgT12HBG+\
                                        0BUkPq2OlLxB1F29uJugPdPTqj7URVE+AbZSvKfM2z21lAG91vJyveHbkr3KuKM+x0czPRTyMT6/oqq9eIfmPFWIhzyuths+ld26Pch1nr3T3Z29\
                                        JOpMvlUNQT7Xc4G9jR/GPQAmhD08+xS9078KPnMxWT7Ffom9MzWfPJl4wD073mK+YOsavRtbsD3kWlI9bMjPPQthkb16/gu+Ue3SPUJE5z0PUf48\
                                        HPZPvXDVE77nVJG8WX/yPUky+70nLAe9pZDpPJ2HGr5Ijua8UIlHvuYudT7dnwO+HuADPsrkFLyKX/E9D5zlPTmIrD4w/B++kgDsvaXQdLwd2LU7\
                                        cocEvtYgnT2BQao9mc2xvEhrKD3jAZk8YNvhOmAZEj7R1xS9pdurvL7abb1Mb6y93CNLvZfWI75NT0G6XtTdPdqIaL4w+cW8GN2XuwjC672462c+\
                                        VCyrPZQ5RD61UBu+p2DwPZNR4j102KQ+XTRQvTisor0dV6Y8G1djPZcRqrsQVTS+lf4cvvoPjr06DQg+EhlOvmqsKT3ViYi9JGCwvRueIb7QnCC9\
                                        5SsBvodybjzSY2M+ogX6O+I0ST0/aVC94htbPedSFb0gShc+rVYxPg2syrwo04a9H0pJPv+PXz5cesS8onJ6PeIAkL01P/69aHNAPYmYbD6DoXa6\
                                        cSE7PpD26z1g87Y+9zdxPkP7Bz5Ag+g9PVotPhLmlb2b82G9l/pdvfgFFL5maR+99ZKJvMo7Z71+z+s93B5ePV897j02bcG+vb2ZvP6Y+D1CEWI+\
                                        KJFpPSakprwyNOg974uQvkqyyb4SuxK9rhgDvsFNCL5ilgs+DEOBPm8dgD5/aZq+l3ppPjeOwb3t4IO7vchdPe+oWr68Pxk+y1d9vmbABj4/oJ8+\
                                        fqYLPfJyB75yDTu99aJ1vpdCu77O8EO9revePX+f7b0DVga+5GhZvlLZHr4FUSa9pq+svtPifL4gWEy+gSQYvoOoKD3ZiR+9ZxEPPrr5w7zdEI69\
                                        v6W8vQaxQj0/U149ycGVPGqKjz3To2M9bEaavsFkJ72htwU+GcXrO85ftLxZT38+sqk9PWeHXj6d/uI9x79kPtYSDb1KEdu8YRdCvsI1wb3V42i+\
                                        EQ0JPg9S8r04344+AYKJvNCUi74OawK+0ttpPjzTE7xOC5s+E8xgvnaIRj0SFGg9cTzwvtYRCD505/i7PgafPTL5JD7dAqo8e5GZPu5Tv70d8aG8\
                                        x29pPbxVvr0tEZy9sUIvPWUaiT4gLjs+pVmivvRypT7cw8m9KVJ7PU6ybT4AdHm8UqxpPqzRfb5bCUm+x5zgvRTzxr12WoG+rwkyPuS+Wb52Joi9\
                                        fqgavm/qJ76MNmK9qieQvpVyVztaogy9dedQPhBqEzwGIUM+vreDPTaxhr5r6Is+ro0nvqA8Sj4JwOc9G0+Uvi9kNT5iKwq+CBqaPRtJgT4Q4v09\
                                        dAOIvbR0yz5bNie9fzbmvaGV/L0qZQY+j12LPbyCdT6D8LE+NwiCvbzDLr3bWQ4+nAYDPWW03r56xgm+6lusOxCbNT5Sw8E+a1MyPtRhRD47wuO9\
                                        roD6PLhDwz50zPc8IvURvuy7kz6ojSQ+15RLPbZPrj7M1s8+sfuUvtgyBz2Lgqy+LLATPlb4FL4lESu+yEClPVHot76B1jE7ybS2PD986rxrl2I+\
                                        l8PmPTfvQT4FA/A9AUKPPZZpUz4Ilbo9unOovCWUpT3k3Ay+X4MDvepitT5sp0G9ks+BPvakg7wDvqu+qd7EPb64gL3T+4c92wYyPsQgJD3L2l2+\
                                        e7u4vhYQHzyosnY+/061vkjnTz45UZk+10/YPH4QKT53jus9FMEJv9PJaj5dJgi+trCDvunxjL4yY1e+Sfi6PWTvhT4j4Qg+YutcPmoghz2OR6g+\
                                        6HPqPp8LWz5TXoe+PImDvPspl7wT0JY9ZmD8PU8AVjw1NAC9z7q5PidvzrwIOJS9wO45vUnhej0PvC4++8DVulToDj1K1Bm9M24JvpkAabyKgS2+\
                                        pHd0PqRKDr7NcWo+j3RcvhHYib3zkbe9F+4FPgfFqrtmgW6+3qMpvj04V77DzqA+rEOYviVBUD4NjAo9N+RFvt6DoT3Y5W2+Mpv8vfEl7r2O5iw+\
                                        u+EEPhI9LT4bEDE99JrGPZMbZb4eVMI8IeE+PgsqJT6tpFQ9guv0PKMIhT3GPyO8umfsvSyVj73dN2K+W2OBPQ42Fb56t5q8hnVKvpOofr2CCV++\
                                        co6tvMRKIT0LD+M7G3zwPZvuMr1y1Da+o4w0vhhzurwgjmG+nHGuPcwb6zshCf69CeA/vuppnL0jj8+9T3mkPAOEBzwZWRo+7NBwvUXEvb3Yt5m9\
                                        YRJavaM9o73Hn8+9LCiivQXdFz5ixFW+FaH3PVsArr1jNr49yrfKPRsVDL6gxcM9IXYGvdGD1D3EHwC+ccPcPeqCC77f4Io9e6jIPeAA5z14Gei9\
                                        yFeTufLEqL3jN2w5iAOIvb5bEz5JvBG+p3q5PZNfFD6qzOq870j7u+29c73zuuA9U08bvq9YH75ygFK9alU7viTJlT1LSQU7OdweOw1BN77G9Fu8\
                                        5mlTvUi+H75NW+m9tUESvQLm9z2LdUE92DkOvPrlcL1nn389dCvHPDZS+zxWYpM8VMq5PTlcsb2JVTg6x3YmPeiN/r2hY9u73gYRPpp86D16fsi9\
                                        pl29vacU+72sk1g9MxjGOQgn3b3GXb09SLk0PmFi9L3hGwe+Pw9DPphWOD64NiU+3UkhPuStczxL3Mi8FK4LvRL3ebzraIg9Kwgtvit2/r2Jvi0+\
                                        05eZPpCSlTxdyBw+0v70Pln/Bz7ohR6+ArUIPTP6Y77FSXY+inixvnhHjjvob3I+fyDKPJc0GL3D5l6+cgeBvRvwgDoEw5s9os04vc0VYT5EMjM+\
                                        yFnFPcrYjT2Jsf89ksi7vYR5rD7fzra+lQnpPD290D1VeyY+56sUvvgvML0+yny8DSMwPoBR3b0dcgg9VV9cPj3zET6qB/G9zRYBvjuDfj5vf0E9\
                                        xpS9PVb48j4jihk+IYXGPRL1hL6FeYq9Azwwvo5bHb0ykT+9yhbzvRQuVb7SJzY8BRZLPqPm8bt02Ig9umeqPjJkij3YxAQ9y6BoPkyD9rvUW789\
                                        wPkFPrzTCD5grIk+sbykPoCzXj4c2lG+NIyZvscWQD6dCiS94++qPeS7J75J1ma++L3EPEG1Mj51d9y8aZzEvuk6uD3QAJ4+CIjzPVKwhD4KP5I+\
                                        eLlbvX4Zoz6QFVO9Sj13Ps6tjj4ABqS9H6VfvoxxSL3i3RE+0VBevhu1MT1DibE+CTgIPhepkD2GkqU+74/cvZX3Sj5Vd0A9NvF4PGkUmj6gSJI+\
                                        UDo7PaQHiT2sIkS8cT9jPnBwLL7y+lO9khZnuwSMULyyN02+FcxxPGvsir47blw8pwWbvpmbx76jsbC+Wj8dPqFdQz2q+C490pFjPvMpHr4rQQO+\
                                        2lkWvgHDHz5d4Za8WW5iPu+gCr6P5Y8+qTS/vJbVv72bJLk9a6ZZvrsCFz4dt6K99i88PmW/r73JLgo9lXM4vTeGGb5KZDO+rBWpvVr4Dj3phAy+\
                                        P+IqvjgeBL71tx+5vYrmPU6DYLzQdpE9JqaSvQSEMb4sKfm9C4RHPRWg8z08IkC9YYVWveN5ej4t9xa9DtZ+viLRRz1ZaIo9U+kKvv8AXT56IKI+\
                                        P264vJOVeD6Cr509kGawvZDQG7792MW+b7yoPQgSlb7U5qU8Xw1qvk6j4btG0Ci9kx2XvQ1Bfj1q3SO+PkQPvqBDJ74Cghm+Y9KuPcwOK76fP6m9\
                                        hSMmvhPn/T5/ZjM+yGEOPRMT3jsJjgA8n0CVu4GsxD7kCaG+nH8pPGmFiD38/QE+f4SOPaYmcr7aXTI9EU4GPqVMgT2gLJq9PYyoPbT72j2/MIm9\
                                        VQ7CPTtvTT5RIj8+gRl5Pubair3t0R8+1ETRPTc9wLw3KFG+AEFiPjH4FT2uzwC+UYOivQ56Ez43Yzk7mYZgPjtcET6wJUo9ugZrvc/erL6ltWo+\
                                        o685Pjvgez5JaKu9jdmCPUr4Qr5E40i9Nu7dve8dQb4Q97U9FW8ePmqFOL34cVC9lzjHvFtE+L3rl1U+TrHovWdjMr0t2B0+BrzNvNUFnD7EhfI9\
                                        LbOvvdEf1r1CyQe+E/SFPaAoy7076g2+lgjrvFuUNT1z0Um7HNuhveZ1VD3sZgU+qaSuvc2FmT0fG7M8bWs0Ppp0Kj6WHUO9Yg4tvanDmL2z60Q8\
                                        a3X4PWO5Nz4IxD08rY2KPZU5gr5XshW+vwYYPQk7GD41IVW9LQM+PiwNdL0G5jC+BxGNPIViq73jRxe87+n6PTzKIjw9ivk9otA9PtKgP73muI0+\
                                        f1JCPEe/KT3M5RO7jBD/vICpmrsEB7c9v1dpPQEAUz5hDiO9ai34PQc/R73TdzA+jyFpPvtp0L1C8Iq9KLFTvAGFZj6gJ14+k/JUPsMegj7Un+O9\
                                        v+FxPh9F1D2RvoM9rd0bvdSbVD7nHqY8iC3vvRN08Twdhpo+hExQvv+2XL1n6xE8hlwlPkHUAL7gEHM9YN0RPfFumbyN9sa9nBVrPlchez6LE5m8\
                                        W1R8vTnDXz0XXSu+rCrfvbuaAz0F6Fm9j+2ePFlH7L1cdTw+XlGvvRV3cz4viyM8msazvV0h9jzwDp8+URlaPMbzZD5B8rE9D1mSvRLyLzz2y/Y8\
                                        9k5WPpt0S757O0O9f64APui7Bj5S16e92El0vhj9Tj7HmF89DV8QvTOnEr6KKsk8X1G/PC999b2aQj++28xcPnHtJj5yQTQ+CHRzPbPOrT2V16U8\
                                        Nb0CPjMhXb6Lu689gTNIvTb7Hb4quoU+do2+Pqv8VL68x0I+pQ7bvapG/b0k7FM9T/ouvua0jL46+ys+yMg4vgucJL57pIs+aog5vN1Shjy3K72+\
                                        YqiNvf4XQ7xywmi91bMYvqBuET2SMN+9TVYNvji5Kr7tJ/s9UvUQPpmJdz28J0+9UvRfvkLIpj3D0Ue+qlo+vpDB6r31XwQ+/x1OvtsPDr7n31i+\
                                        1LHRPpqE2z5rk+09mjzBvtZuY74/xUe+2HEFPnLKtD52F8a9PhiPPo/KH76CPKa+BWfbveYBgr4nh9I9xcgfvd05v75NaSS+D2A2PUFcYr4YYpc9\
                                        tHPnPSWlubsF1gE+eC+dPTP+B7ue7No+oIQ5PmL9tj3sHDa91Sk0vgR36z7mLXM+uC8Yv7BDgT4YJ0Q+7HW3veiLErt8V7292gYNvjgGSLyeOEI+\
                                        PWTXviaO4T4cokm9oVL8PMnMVD75fSg+hMWZPgoeQz6+W+c92FiTPs0fe70SvWK+WdRBvYOCC72P2MW9930bvimIAL4QrZw+7F4BvWDs9j66MSo+\
                                        FudIvdiyWz7asow+b+Vbvm5FxD1ghCc+dwh7vhyRFb2M/QI+65E1vVpPOD0Qlly+RXeEvrsnrD30ZHO+QgdHPkXJ7r7vPD8+K5C9vS6CZr61bNO+\
                                        b9EPPklMAj5pBA0+SvkiPAHLfz6Rmtm9kInbuik7Fj9AxXu+shYTPgrhJL0xwS49bkycPvqsd72jyzM+wFEyvqBtzLu0m+K6clIbPiEB9r0YtRS9\
                                        ejnXviEhTb5/v6a8GtGlPfbNX70sJsq8QSuiPlVdRD6GjYA+HyekvmWL6j1BXk69Af6hPodYGz6DBwy9geCQvuDbFL68CBE+sCqWvo7jlTxhvNS9\
                                        2+i+vOHIOj5Zyng9JwNTPgyau7vjdfm9TN8Mvf4UybtW6os+q7a+vlcpmL4ZNv898sz5PB3Bc76SOMU+k1+mvsLJaT7LDiO9Q/olvaYdRr1bIVe9\
                                        FQThvax/pr066Sg+RyHEPUAvQ74NWhe941JCPsgN1T2COke+dhyWvi2ghT2jsJI9YhGXPsuTwr3v7OY7cZTDvJ3kkD6aDg++slq7PAnCJL7BuDG+\
                                        TWNHPRFj1j3iblS+Jv1gvlIDfT3Jf7+++v6BPgm7FT3bOgO9MEM+uwbjgL0qx14+D5D3PTJPCr7viRW/ly35PRqgy737wAi6WAcSPu37Q76k7GA+\
                                        yfMjPcGU6b0Ap2c99jKfvV4fer5D+cE9FSsYvhYlvj65bXm+73g6PalbWb5r7Yg+t21QvYdxBT7x+eA+ZGnPPVxBnb56RCi+5pMGvguhBb6bp+49\
                                        BowUPozfaz28kX8+oHNxvvTOijzg+Xq+ZMeSvhoTED6v540+roREPgLFGD3GVfk93fENPj0Adz5rhgu9yrjuPcP+Sz3fqJs9BwcYPjCYMT6DgY4+\
                                        Z/HfPemo0b3XYLc+gWNkPnFWH76aqA49fBYuPQr40b3YeR6+NDoDu172VL08CZA9tmH3PVEgLD6/Hc690Ga4PEEEgr2yzwc+EbSFPbRsvT172TE9\
                                        DI5EvX5h1j3SBd295e+5PRtAkT2/Lic+dGp9Po1FeT52soK7NWEVvtYsg71qx20++6eqPhfShD6qToE8JF6JPSkxTj33GY8+8D8jvoGC/b2lp6g9\
                                        nvlYuxu0gT2l+a06GOuXPR5mqbyYO0g+XbgoPieFuD6EDBK+g0aZPaKuYT0FcPC9O6CBPW5vwb2Y8Ra+vKA4Pnoblj0QtIW9b6H1veiMKT3bB3s9\
                                        DS+iPcNixD2b8ns8NTmmu+VSYz7Jeyk+UfStvcRbZL1itu06PeNyPh6A7bzDajk+yQySvYq9wD1EYTO95dGQPEswlj2Jv7A93Qc9vD6KAj4ItiQ+\
                                        jlftPa0xmb3QLVc+4l/6PWr7U75BW0A+lgAIPr7Y1DqsEQE+N1asPIIz2b3yqgy+iGwAvUr/1b0fhwQ++IGLuytCETtKw0W9fdZDPsRwIj5qy60+\
                                        tS/KPUwMRz7jQhe9HWuPPlgpOz5Tmts77htevbLeBj56SLE9tOiXPYoqUz7g3vc9oH71vdIeKz6yRyQ9xPJwPQfkzjhPox0+3MGEPZw5kb6OEow+\
                                        kBAdPhoCdL4oLuK8TMcAvk16zr1LxmE+zodoPnda2T2hd0u+380kPkjy1j39ClQ+R9KZPY+oQr7VDZC9bbc/vihtsj3oU3M+DriIPrHbKD4Kd7A9\
                                        T2fEPR6pV737n3+8KT05PUqYGj4jvT69SB0DPp9fRj59JmO8TQebvo/9rz1Kc2e9wjRzPmykj77ci4E9hiTMPLhuCL5mcC4+9NxgPn6fOLxGGNA9\
                                        yAGDvcdmND0RXZE+R5MnvhfXF73HqEI+k0EMPtBZVT66RXk+CbhvvXc7QLyGUTq+9jcrPbZvRL4EI8+9pyO4vfzoBb7aBJ29g3J+PRUQY74uUCs9\
                                        FlF6PnxLLr2ULCA+ZdAvvh2kAr7ZbxY+329ZPBlMvDw46Xe97gq/u7IrAz6DHi8+uRqzvXjI47yFbtY9tlBVPn0yWD6d7jQ+XSAqPuQuCz7iUr08\
                                        VIMhvu0NhT2oxhq+plpyvvusoz1PykU8Qi4uviD2gT750DQ9Lq3jvZh4l74AqSG9wrXOPa8XZL5m3PS9Jdz1O65BGz0VxRo+ulWJvWwVnD620t09\
                                        jMkDvvG+oL2Ekli+P2p7PTvqIT4GewQ+eH8cPCknMD1G7Zo9d8VQvec3QD2bOEa+GXtJPr2Wbzs0w8y8XACUvj506r3PyMS+9yQCPdyUhz4YSqe8\
                                        IJ8kvWbHVzxZtdk9lnNeviB36b0SvQS+E1R7vvVyGD4nto2990EivnOzczyN7xo9+YdpPWT8Rj7+dxq+w3jQvcOXjz26CBi96b4pvqpVoz6sAjM9\
                                        PCNKvgoFw70nkAe+MK/yPUQ7KD6xQaM+vxbYPZqPGj1vVL09K5WyPbPN/r1NxvK9bkMYvkuiSb5kaEY9Qi1pPc8D5L2Yz4g+5DkdPi449T3b1zy+\
                                        9RGZvB79fz74St+9KQr+PEA5Y76utjq8ULWyPeJAwT4jgcc85cTqPUeVojsN6+68wk5FPLLbAb61M3c+qJn0PY8Uvj0kb3m9hDx4PcrcOz5ZT9e8\
                                        7qGZvXs8Dj5vBW6+G12ZvTO8LT7xjtA9/37OvTeYRT6VIcS9xckNvnL0Ar5bEDc+y13gvWZViLhWIji9f/s3vTldI77U2wG+/ScNPRsidL2wu/g9\
                                        XhfVPX+5AL5XHjC+SfgQvnk1jr1fhwC+goYnPpMzQ70DKi89a6IQvm+DZ71pqMQ9eISQPaOKPL6z1Pa9Lv/3vbq+aD2NpVI9tJVfvUInK75xcle+\
                                        1dajvI72oby3bnu9h+jqvde1Sr2/Klm+UlkxvBUQKL7VBZ4+pK7KPHWtVb740QW9RaCSPvSOwr3KZAO+ZUhYvoeafzySYPy9gHrmPfmpsD18WhC9\
                                        xsc0vdKCSL4DsMs9p7UwPlIU+z3Bjyg+r4dePpsgRj48T/q9Y71nPTYLdr0ZMOK7ii0SPilXwj0jPiO+ibKCPc2NjLo7+169ukvRvXZeO776yqq9\
                                        LPV/vRnSe77Xwwm+znEqvdx/PD4EjW68PcVMvkLz1j0Zudm9K5Nuvl4sgz32SD2+Vkp6PXg2jr2ECoi+PEZzvSWB+r1xrcy9ChY0vKqEwD1mUBm+\
                                        CKFcvkf4nr3BJgW+7GQBvW/d/z3YZD49MXQCPmfEfD16zKY9bobaPUxTt7ugtws+BGAAvrTlB76MubI8UVnPO+6xlL5R2DM96LsfPhhzLr2aeVk9\
                                        NcZMvpYk4b1MIJK9hXclvhDGCL1gVHC+rInkvalSdb62IlU7XDYXvS7RBjsrJOy98+TxvaIAkT3gwby8U5FnPb5ZcL4G5xa9zG2JPo3l5z2kOtc9\
                                        sxZdPjccsL1sJY69ESLVvGuLyL2sGOW9CaAIvsJA0D0ZI008IsaTPbhCFD0avIW9w9vNPX99az49ueq9GPBgPpPN7j1Vi2Y+2FwWPdiOcz1feNG8\
                                        mEkBvqYz5j1QIyE+ayervl+k+72LgSI+mEqivcTyXD4vBU0978TdvfQTEj4vVTC9nN2MPm+f67xBSIy+DTaVPJ9ZZr1hucS6Gp3OPtMvQ74IJwy+\
                                        WWFSvcARjT2Oc+69yPGEvs0TQz4JvpQ+A0kSvWEF0r2Bad0+w5xDvlPrq75eGwa+1jeZPcu94L38bhK+Vn9HPeQaA77RZhY+rgJrvjZV870HbqE9\
                                        k2Wovu4O4r1aWAQ+WRecvraglT7FuIc+kf+MPr1C8DvHmqA+vhIbPnC83j2K8om9lW5CvtFJbj4HEY6+xC+3vpxwSz6zxmu+dGtWvUXTlL1iiBG/\
                                        f0jdPWjmBLwNAdo+FRPlvSSudz7nAkQ+KcGXPu1jtjxuLWQ+55ucPWaHmD0auXg8zxyJPTLCpDxcNWg+iJVNvoqIdr2qDpq+WkadvUWhFb5a7Qi+\
                                        FJNgvktLJj6n1IQ9Sm1QvXqEADzMBGG79E9APGhzwb5ToIE+tfQDvxJIJj5zZUI+eUmXPvBbtjxzh+W+hVC8vYoH7L1v+wm9P9RTPkKe4r5UgRI+\
                                        lOBnvm0YJD3fVTu+g8f1Pnu+uz3UuBA8L4fYPTbgSL6T0qi+sIxJvuPNLD0jZNu9W1CYu4vAAj+wnw4+TBdivq4wpb4obJG+htxJvgA90TyxP10+\
                                        AV8YPD/4wj0qdrY8scJLPrekuD29rkY+tqTvPIyphD0JbAa+ZpsPPq4bOD7ECF88Y2pivuuoAz5Jx449m7e8PnXf1z0PgjK9gvOHPU90kD4N1La+\
                                        VmsIvvQnzL2lc0y+kijivS+C6j6xQQ++MuSfvh2Qoj3qwh89kfyNPL80oz2BBvK9i2aDPSj5cj7TBKy8tDBfvjd8PD6fcF++X2AuPR6uzr1Ytaw9\
                                        1qXaPBCtPL6FD5S+ImQTvu7+hz0JeDW9RrwOvmvIDj0HktK8yshzvf7RPr5o7yc+IxmOvorgI7684QI8WR58vhvmaL5uA8y9PHjWvZHmpr5Cnr8+\
                                        GKsRPZ/C3L7Snaa9Vb/JvYJtx75cX3y+GsZFvpUeXj57g5g9vnOpPf2ugb6quRE86Foyvgavwrz/rCY8wxOZPfTOj73AAxq+WFNOO6hop77IhX+8\
                                        idOYvv5LMT4r8dG+voWzPRaCTz7jABc+LAy5vk1Pbr5sUDm+l/DhPimqUbwasC69AFQ0vvv9Ob6yhS6+LlnBvj8LN7qIha08SvgbPmlDyzxqCpu+\
                                        ecnDPHWDxTyAlZq+CsJUPrER4r2vfI4++7ftvbkCnz3ja6c7tfMKvRl3NT04Iie9sPNKPmDImL4/OjW+Q41DPXIIsj0kcbu823VpvjXOBL+861y9\
                                        OZzWvWyMaj6b6ry+iwL1vUlVb76+2la9mIwrviU67b0CVLq9UqyzvdiGB77dMag+1jV+vjOPhD3NKpI+7+eJPO9y5bzhBU2+QS85PrEHAr7vt+a9\
                                        +OcXvp7ibr5mB5C9wy70u6DxSD3YRyO+jtCnPWZxKr4W5H68pvI+PbPBML5tqfu8celNvuvcaT1cxE695B5bPRmJTL4VdwS+mR6qPZfXvD2OKPu9\
                                        apYNPoGCZr6xyIW+HPyuPTxuUb79nyM+2L64PS8OdrxFqTC+iQowPuEIMb3Dg0q+FAMWPtVZLT4VOk49j0YHPUPcAL5KhC2+VqbDPMv6EbkRndG9\
                                        /WgVvhSIMD1O0QG+xSWlPSyFMT5PFj697jpLPGRa8zx54gq+NZ+lPTWOEL5/o8A9rtziPVXHXr3OOTg+OUw2PqPOXD7FjQC+QbK+Pv6DTj2Dnvy9\
                                        bn8NvSRVSz6UY829r1fUPexqVz0dCpA+LmWlvDnV1b0WOpA6dTF8veBPzbY6Qyo+sXD3PTSXX73Fa2+8jh0uPZ4aGT5uRGO9giG9PYBWpz2VDQc+\
                                        /0o9vnWr1j1w69q9Y2PDvbM9Ir5yT4U+L6d7PTbQ0jx2kz09To1IvXPdGb4fI0W9hCVsvCzwFL6xdXy9d5QZPVFdmT23Udu9xj6kPiPuFL4fX9U8\
                                        1TXnParoc70SlXy9XEX5vdLXQL7Oy0o+SAQcvVkFW73gnFS+gAP1PWRjGL5mtQM+UCIhu13abD5/2f09FrsjPkCbtTyTN5W9Lh9eviBVBr3TmnI7\
                                        lmwBvgzvjj0dG549FwMevUwx67yLVg48cb5HvUZG2j3yUuu8d6GCPq50jL0VBJO+4NzFPrvWcz2CFba9MxjeveseQDxQ+Mc9eMMovkI8pj2LPMi8\
                                        RvpqvAiZ9D5Ee5A+Co8ZPFSWKj16hmC+1xygvpk0dDzD+Ns+4ygXPtp6uL477cA9kMXFPWijsLwaYI2+pURjPqTbx7uoT/s9Dh9DvmcXHr0Isve9\
                                        ES9hPoEDXL7ix1E+DyRMPbuEzz1Rw+A73mCOPIFyAL+toPI9ra+DPua62j2pQsY9flXFveIp077MaS++j98QPjvNID3fg0o+U4GYPvQnuT2gngq+\
                                        TEKSvXR91bzjFVK+hM6hPsp5oT25NsG8IDYkPr/zxj4j82e+SLtqPuqtXLxzeqa9TXeQPuJ/XT5OjqC+vhGxPiMr0j7xzoy9E+zHPix1Jb3s9OE8\
                                        gq2BPiKuiD3P04s+wgnJPmmXQD7g+dG+TTPWvZalED5q3be9VsDBPcxFb77FTWm8GXAXPRbjTr7MwYy+Y9TDPp6+uj2q8LM+bwYLvjcICT6wwr8+\
                                        5wIDvlVYl766dVc+nvQzPv92Xb7oLM2+G5ALvRw7H75q1ms+81EJvu7kcj47PZM+D/B7Pu3SKz1cni2+mrckvzaEmj37kmA9GXyTPTpt+D6K5/y9\
                                        xTsdvS1GHDsIuCW+QalvvJ8kfLyHnHA+TA+ZPeQeET5ewv++4BbPvaKv0LxBIMa+n286PgE1dbqYNV49zP25PNwwbLwVVSi+X5sDvhZJsz1Ker+9\
                                        UyhePgu4nj6NooE85F+gPdFaiT2XpEM+3qfWvuHsU74mWBC9cvwhPhra4j35d9S9hO/PPc5J3r1iCKE+7myfvt8JOr2JUNi9yq7+vWJpzz36NpG+\
                                        NMhhvoEHHb2OzUQ+tH+7vn0phT1l5E0+bUgpPh19+j2flVe+FDeEPfL+Fb5O8DA+hvcbPmzhUz6ru4++L1SzPo23QzzfHfA9xlEqPemXPrxYK5G+\
                                        U7CjPVVWtzwQ2f+9xAQfPp+NZr5+b3y+T3w3PoBrHjwWr1C+xxNgPnTJUz4Amqe9xCpivCMFjb7pCkY8CdqFPon3gr4VY8o9P5EKvTrxVb50kFu9\
                                        wrJ0vTydgz5XORc9aOtQvq0ZqT44JZ++dWqPviuGGD5SP/i+GR6IvmCJ8L6XMYk+Ev6OvsR+Kb4xfP+8VCYHPls9Jz1+VIK9mm7ePXPy1L5s96G7\
                                        1YysvH7nSL604Zi+fbXeO1pfzD5Sduk5jVFfvdlZDz1k75K9bHcIv0gUhL797zy++7bqvgFKH74qqBO9Ql9qvpUkKz60cjs+oyMvPZf9TD2QTJu9\
                                        AaLMPmNkhz4U+nS+TbqMPeti4r166sC9LR67Pk+aej6mNdG85KhOPhzzFrxUFJw+2MOCPWGQaD6uiCy+0YOBPdosTT4WpNI937SIvVhqrT66XAo+\
                                        0fNiPiI4Ej7a17s9fT5UPQqCQj6qMfE98WKuPW7QWr5Pabq9GomhvOE5RD4+v+Y7MOvWvWItyjxeGsu9yjqKvO8bBz5BE7u9lmPjPcvlVTuQ4vs9\
                                        BUe5vOZR+bwFa8K7dBMnPphHiT3txA2+QM0vPaR/iz19WAg+DO0lvqPMGD6CaNY9vNEKPf0RSD6cYOu979lcPX7gPb7gDaA9QmAlPjECLT1sYJe+\
                                        lShgPv69uj1flj+9zUkZPhjjjj3FOwW+5IekvTcLajxdHjg+Qij4PW03ij0VjI4+Gpo4ve3BB74oZls7nOnAPdGRSj4Lc4W9kWeTPQFSFz632+A8\
                                        dL93vLCEbj7JyrO9dVcJPqnKdz5FUcU83z8hvkavVryEiNk9BI+nvFJ9HT7qpK89cob6PQaYgD2duQA+PIbSPW/tDL62Y7W7sB2ZPWDh5j2bqc48\
                                        T84hPQl1s71c1ec9mo68PnndoD0+xze8WS+hPt+oeDzvlm69aT7xvZPm5T3oXTA+HKsRPZG2mr3RLmg+7hfgvZudt72ovpw+X+oSPaPspj5s7UQ+\
                                        zZbMPVK6vz1RctA9gg8IPncPbr1J0uY8/f4evWdaor1KwBC9m8GkO6fMib26Mjm9/SuKvslslL6DPjq9vsZPPn5mF76O+VI+ola+PhDm0T2oeYW+\
                                        9nI+PZHsfD2QSAY+Rt+CPCAfUD4BPZO9JED0veGbkr51nIo+69cLPcwPLT4hy3e9Reg8vnYXhb6ra9C7/LWOvgS1ID5pseC9AfNNvRxQUT0srxW+\
                                        fIUyPSHPHT37KS++AEqRPrV3Cz78klg9qiktvS9gxjyCGmw+V8c5vlwqw70oi2M8KZacPp57XT4zn469jazkPeciLz7L2+E9vMEKPo0cVL6jqV4+\
                                        8kcivn8ylDzmNuI8VwEbvrLpJj6OVmK+zmp1vQjN0D2ZXXY9aFH8vf5VOT6N/0290zk+vie/Nz4e8qQ9au6mvtxsqL3rsoK86G5CPjJ7uz3rUdq9\
                                        G4D1vXeFzz13c0G+92iCPcdOIL3Ardi9ZqIGvTWGYr4fxXA7QIJ4PUDCH72/97Y9HqcNvvJgvD1IDJC+/BwhPqnvDD5bBHk+sNKjvWcBxr1MObQ7\
                                        vcMLPO9arb7EvXE9JBp7vhY2kb3vd8w7duOFvXpAQL2LMSU+L5T/vaiQhD0ZjAW+Ft7GPTmjsrwCJoY9h6oDPriE2T1/zQa+03EsPnNhDj2bdLA9\
                                        qj+NvR0J5j22r6U+Zogjva/EmT7bDqU+lfHXPdU8hL1Xum88kLXNPqxwpb60fAy+Jl6VvkiPS76mOUE+TBtBvGufNz3c7bk92kqsvuhEKjseoSs9\
                                        6swkvbYhoL6496K6o9adPUzqPLzYq4K96nC+PDJwLb0cqIm+LwuBviZU5z05MQi9lhe6PfYe+L27wpy9mwJdvsIUjj5nnDk+oA/Vvp2CKr7qtSk+\
                                        gvAiPSaqHL7Cr+699gfTuxE3V72yyYY+xqe4vQw6Kb4tQUu+1pKXvqOSCD3o+Fo+diYUPiA1IL6fhde9CJ8xO81dPrxJ1Q++hc2LPdE7gz6MknI+\
                                        CcwlPukDTb4t7vA9JAX0vRhbAj51z2+91a8/vj4mFL0j36+9bzWtvIkDQr78l0O+8Q0tPvJkf74TQkK9CjWvPaIQdz01rVO9iPELvg9Udbwtu4q+\
                                        3ntsvahasT7KPHc9u/0bvqsVO71KDbs+KJ6OPQYt0D1ffPa9/VGCvobPHL6MYzE+hqCvvBgWiD4YscK+4oK+PYue0z3eOIc+YvzHvmV/yT1thpU+\
                                        4QAePWAQQL7E8wa+AoOAvnx27730R5y9lRpxvt771ricPoQ+BLY2vkZYPD5iizI9F8tSvlXbrT5ip+68Zo49Pi8MoT2Uq6i9qN+CPuW2lj4y4ya+\
                                        kKGau5yUCT1KF5s8Zed0PTVFc72epsO8Dd5RPYh+kL21u0Y9UNvkPuf9Uz56eSY+"
                                      }
                                    }, 
                                    "dtype": {"type": "DT_FLOAT"}
                                  }
                                }, 
                                {
                                  "name": "StatefulPartitionedCall/args_5", 
                                  "op": "Const", 
                                  "attr": {
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_FLOAT", 
                                        "tensorShape": {"dim": [{"size": "128"}]}, 
                                        "tensorContent": "449yu+o7hrwRCBW+Sq5DvStzC72H/GY9PgA0vdKT7r3eHIE8BqFsvQ1xmD2j1a89tii7PF3scr2yJ3o9MFP3O/hb4TyhyN\
                                        67y52uvLd7wzxJgCq9T2krvcdLUTsApHA8wfNGvtMNFTyGvxK+WrS1O78jkj2WUpW69bqGPfvgvTxJx+e8/EPgO560v7s0i4I9PBbCvKJjaLy9n1\
                                        W9EfbKvI41UL0CfQy9omVevdhIVTwgtuc6ZQ7BvW8pNz2FOCu9P6VGPZW4hTzALS891JebvQxSHr6XKhS9TM8IPV4+1L0dlCA96tkKvKizVLxplg\
                                        M8kZtqverZCb00Plu6xz1KvT1yQr7t6629VQCSPP/lx73ELIy9MrzavYqk1jx8LD07vlruvPzMMD0EgN88yx4PPKk7Gb2GzYO9EPnYO3Ao/z07UB\
                                        s8qyATvhegKr1iPS09XVhoPTU+xb0M0wG9SYSaPTYELDyJ1qW8T+iGPCguHDyL8Oa9Mp9rPNqZLD35FrK90X1ZvfAGQL0THqa8EfqivWHS5T3YJF\
                                        w86LYbviHvqr28iie9LvfWPFNI17tKb6o9PIAPPdPCuj3a+Ea9802FOoQysL1U86C9tcaDve6me71BI0I9JhglvvW1lr0E8uG8f+nBPcQN/rxPbo\
                                        W9XelBPXojqTxJ7oU8mPpcPRupAjw="
                                      }
                                    }, 
                                    "dtype": {"type": "DT_FLOAT"}
                                  }
                                }, 
                                {
                                  "name": "StatefulPartitionedCall/args_6", 
                                  "op": "Const", 
                                  "attr": {
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_FLOAT", 
                                        "tensorShape": {"dim": [{"size": "1"}, {"size": "1"}, {"size": "128"}, {"size": "16"}]}, 
                                        "tensorContent": "QboiPneSij4c/o89U4C6PqkJ0ryWHIi+jsyNPf0ANL7cQpq+SK7VPZ2sA74+Ghs+6JeBvh7Vgj4YlfE7L5JkPdKkIT1Pc5\
                                        Y9uNyhPV5T0j0j+D8+yWslvl363z0HuaW9T2T5vQqgIr6Yr5270EFdvpyYUb2aQaS+1PgsPuLiML0Yo/w8rhQDPZBdqLv5UAq8nlnyPNkicj311/\
                                        e8Hpx2PQM44D0d+Cs+AFc1PDM/1z38Fju+0OhiPUZHXr0nY669zFZrPK9WUL3alg09NNzNuVlDFj0ILCK+/VfAO2cHdj1GCv68ZapNvrE9tbx7ck\
                                        A+7zGCvuvv3D2ixCK+9HM1O0hn5j2XiNY9OfmWPQzUxj1LUL2+/fO/vKskir2ubOI9Sp0EPu/2sT1ToDc+KhI8Pu7eZL0eGZ+80hqnvV3leDz2lA\
                                        e9EpYrvMd/Ur1vXwI65r67PcMBVr5S+jC8mhppvcPy471Z0J29qgIYvlmQZb38ckC8b98RvgD8ED16xi6+CHOrPZISijyIgXE94haLPNQber0LyT\
                                        Q+K7AHvppBmjwxtWu9QcIGvrKZeb25P4E9zZr6vUPLRb2wgK09iZwUvXwKS7tagG88Db4fvaJDrrtYwr29mWSWPc2Dz71DeX89OegCPvZtxz1a+H\
                                        M9kSjAvN1CyT3aZ2U+5XxjvdREPL5/mBQ+dY2jPlAx4T32O/E+KDpOvnXzir7VSDC+UsJOvob5PT2t9dU9dRlPvjuCMzzol668wr/DvTEAID2j+B\
                                        S9JpI7vO7u3zy1WGY9GxWGPUU+nDyvqBA9syVwvPMzoD2QSxC+ZiAYPlW5m70S0Y69POaHvnHGqL65hpA90WKRPFcyEb0tl4G9tuujvUfH872wIG\
                                        c8Zc4YPnfaEr1r4Ac+/QXYPIdBZzspNha+Hz6JPXO44Txf7ec9thDHPe0E9r07mSa6BA0Nvs00gT0yWR++c/CAu9m7hTxOl5m9TkG6vJuaGr15A7\
                                        U88y0UPo2pzT1VCH++2pFyPcKdLz2BOD48hrv+O3yKmj3w5Xy9S3s5PfO2kT2x8+w947CEvfPDeTzjkio+R4EXvVVHIL6DPkW+fm6rvFo2XL4W+y\
                                        s9ttAMPlMDn70dCqy9tTKovb2Gjr3ENXq9QTUHPgFuDL1SkWc9dvIpvRxzOL7cqPI86ENKPHg5YbxhOYe8QrrOPY9Zv72fK9e8KJcevZWXF70uMp\
                                        +9R4WLPA23Zr0NmjS+4azWvLtCdLrvjcw9Icp1vXaoMj54nk29hKtFPnKyM743T+s9rpsKPW4SPb33g8U89JhuvafZ6L1bWSa+zeiLPeXqLz6G03\
                                        +91CcBPjOsAT59z2Q+QVZZPTEYMD6qcUq+PtIxvALhjz18RFY9QiL4u34BlLwSJdE9xQ98PVpWKL75OJI90H7uvUyuBb5zviQ9KXgiPmGODD09Ua\
                                        a9oyGNPhir57y3CbG9slUBvebecr3D9m68zRWivdGcZr0hhq497EUBPhJbOT4k+Py7m+Scu11Hxz0fimM9Fu5PvYziWT12XQG+l5sNPOahkDyDeZ\
                                        o8nWcUvKXH1733dzk+u1hUvGi2wT3GBBK+Us8OvlAWjTvTTrm93riPPLdHzb2ru88799fgPYvFDT2zprg9GcvIPB8oJT2+UlS+XFtvPZP73bxqke\
                                        Y9pZJwvBM/Zb41PMc9o/dbvmgWxz18S6k79gHcu6tqYr4rQ8m7bk7GvPblRb2eHhm9dEssPYyiUjwvfpy9TSkIvScBh731fg4+AhRCvTrL07t99A\
                                        s92qQ3PtMBx7xNGiA++jWjO4769Tx/Eps83t1uPf4amL2q48o4WjP7PZgJ87wFr7y9bWr/PL7flT2cbsE8SxkCvuVFxT3kdT++iiSUvU97xjyZb7\
                                        e8jLG3u4bQtzwjUIy7ztK0Pcg/Nb7waiQ+nHsUPk6nbT1vSSm8j+SWPmLKbz2k3d69F0OCPc9UgD2QlMC9U2P7vKWk6z0qAvw7A06avQz2S7whcP\
                                        093HoYPjuQTD1MNWa+Z2lYPjJWwT0sIoW7HdYmPT416D3wFAe+4mCBvBW2ybyR1OO9QbTevWoY1zwzfog74sLJvWUduz3HAAc+boMivmU9Hz3Sx7\
                                        w8VcDsvffIMjyeNRY9jb9SvROoujwHhnA92SW3vYwJsj0vnJk9xnBLvic9sj3dQRu+4vkgPRh6bDq5TWS9VQ0QvoHZK71aRuY9KP8wPl56Br49CQ\
                                        69k864vc5HXL1mETq+x4DIvGSyU71HUDu+MFrBPdfYIL5e4Rs+TKGCPeC/zLwzJbO9LEDtPOmpqb3q66A9uW9RPRXGl7qgG7+6Hbf+OZoBvT2sTm\
                                        k9vHH2vbVU/b0tW5I9SEPOvHb6ar4r/Z69zKgePV1hAb05Fgg9qjmgPcdJaT1uCMI8dFOkva7SFz4itW29HKkWPZCuXr6sd8C9IHYOPRViar2P93\
                                        u9ArGlPVZWxj3V4Dk+zHr8vG+por2qUkc7zeH5vOvDSrxtkqe9S0bku2e6lr1IMgy9zZMFPgP4FT4S4qW9XLIEvoOjTb0V0cW91Aoevtvjir0+gX\
                                        g+Nw0zPerC1Dz63Gy9NsSYPetEyTx8JfE8JNqzPZKV3L3Nd649WOn5vP/xTD1zsji+OcpIvnTjuDzh3BC+RGbEPanMjr3iusG9HwWlvR/ULr4kCx\
                                        q9yppXPnmuurzIx2k9IqvJvYNOhrybu709oL64veW/I77FE7G93dhkvTq87T0yaYs9j5fwPC/exr0xUge+2zufvBWmT7xLFto9/8rZPTq5Zz3kDO\
                                        29uxoJPnVcDr3vCyc8bwykPY8t+z0LzS08Y7mjvS3dhjx3kCa+4s2sPDgqFT5feOy93UsivUNU5LvVSXK97gRzvs/M8L0FQ4m+5B5hPJCljz3Pgt\
                                        M7d8eJPWASGT1z2tc89bBEPV7jk7xuRkA8XXy1vTV66DvyDX8+a36FPcMz+71BISy+jN97PPcRHr5R3hm9SquIvVuq9zyWUg6+uIJgva+D7T1GaF\
                                        g9ft3WO/WFg73ZVsA9gGRuvch6kL14df09gbJePebyar5T1hM+xAX4PdxeAT34SSW+EaQXvFTcvDx6C2g9AkAPPjTeKL5n6cM9EUwJPtoWcj3mYg\
                                        k9VGB3PDh2m72sVNa9/eOKPdHU+D3ir5e8Z1OnPac22zwxzAY+G+VNve1gDD4ni4u+2T06PnT7nz3mjdy9ZIoiPq+gJT6ePRS89XOxvKgNmr3yzQ\
                                        2+SFWOvH7wG74SD7Y7a299POCZk73h9pM8bwjzvcLVcr7joWg97fE8vp1rkL4dIZi9b1lNvSd5dTx2bCQ9XguYPSeM8L0Eh++92VXoPWav1j1BZx\
                                        k9X2zdPfUj2D2wsu29Sp+5PcOf+r2/R2Y9QDO4PTDFX7wjMsY96eBCvsMWMzyh/H69h6wAvi+sBj4/TFU9Z2CWPnw9o7wG1Pq9n85IveKdaj3WCI\
                                        e9RM5vvZuVc74cjjQ9wj+ROv7wqL1tfKo6OKCIvK/Fqbx5M1W8FoUXvYZ7u70kNIm9FkuSPSnAYzxhKZE8Au1SvbJcDz7/cww+qxWQvcJpoz3NJ4\
                                        88KcxiPglqJr4K1D89iGd6PMRxcD1tfYw8su+VPXiQ9L28fSw+amOxvkRPBD4jI+k8fLJVvgs0Hzzjkf09x29VPQ75vrn3Rik+gzHDPFBVqD1A/Q\
                                        k+Z4gzPL2hHT7MWZq+TWJ4vB1CbD2LWPW8VbPvPFPmG73nbRG+iGoDPnlGVT1gWew99LC9vV6NVL6aizQ9YHQMPl48AL1FLIg+8btivTVXqj2oGF\
                                        m+AR/jPQuG8719bpO8nn35PXyPAT6RFBO+LHiOvVJPC72XNxK+qtpGvUOqarx834+9U4auvEsAGj7C4pO+gc4avnvcmbwf3QS94vN4PXv9vj3m/J\
                                        c9Gx34vcrPcz7p+Je8c9uyPYCn3zs2ER49wv6AvWFrZT2XbM+8x4bOPQgl0j2oGk4+0HHyPcBSi75YgiU9aIt6vawjEr5R52O9KX9sPdlSFD6OpC\
                                        o9O60SPW+JvT0H8d08mi3KPWKnUL63Doe85IAHviIhH76ziKo9G+EvPiw8BL2stSU+uE1rPbdGXj5iE/48ZlToPSsSXT0v8Xo9DaOiPHpcoD2Twa\
                                        a9g/0KPlBkoj0xsqY5kBwavR9Pwr1VTGy+IybSPN7GdD6r1pI9oGqiPTleR717yim9mdwxvTGSDb1HBGs9N/d/vT4jgb2AeI69BB6APENGrT3MNQ\
                                        y+sebMPdujhr3zAQU+6Y3vvbRivrztlhm9pzmwvTyysry0KY+9+qCSPYtcej24b+a9MzQKPicLpTwZr4895Jeivf6b57zYGi2+NrjlPfiTqbwa8S\
                                        Y+gtsNvRSKPL3XYFS9fU6CvcLIVD6/Ub28EApzPnB6urtYWjI9LAqePe+i4r1Mbem9reefPbkoXD0DbY+9DA8UPV2ior2gZp69fI0DvcRkAr5jhy\
                                        A88iMivB67V71g34U90X/OvXscCD0EpGE9sr4CPtu92juq4iO+E/lPPr86Fr7weyW9ExeDvDU91zxhx6q8NvuIPKZtGz5M9jw+M6QFPliEvD29o7\
                                        28Vpbbvb4dCz6Ti8K9chtSvRXK1r0eKCW+rzCWvdQ5azyMBt+83oh2PYhYCTyK2sK9hi2oPTzNSz4vaD49h6/wvKmP6DymFBM+zEGzvUAcYb1EPC\
                                        u8w6ohvthOmby6WBE8aU8+PfE4mbxfymE9Shk7PhVieb3MBAc9ITX+u6tHOb4KQnW8jReYvZcu2bwHMy2+XLejvZ0RTL5kC6s8b180PGvTzzuw+S\
                                        w9xtQ8PpBYSDyAeEc+0IrKvdIjKb7AaCi9edIPvvsuf74TlRu9WKCHPXPG3b0Otr8+uuSXvTN41L2rxhK8AI64vZgq0r0Ffk09D6uAPVKoNz6kyL\
                                        W5NaVIvtF+Wj5Jbje9KXNmvrX6yTzGBmY96FnUPObHgz3OjBA9eZPwPOv7ej2kAa69JboJPjiZHD0440U+JI2bPKmnd74ex9M9pSu+vAxeLr2dmg\
                                        O9Y0KgPWwPzD1mv7i6l2sLPev+Bb3f6x49WwAjPhgRCL7X73u+avRlu82PTDxxsiY9A2sRvBS9Kz6eoHu+ePxYvYyvkLzGCqQ8VzLWvOhd2b2HQI\
                                        m8tjZOOyQrgz3qrS4+I2lHvWs8ED7Ijwe9dRUWvpyMwzsYsVq9t0WPvq5f1b3rioM9mipFPWW88T3JiN09P1sLPhWatj0blKa9/fvBvedH6ro7S6\
                                        W9UKAePKTGSryC+OA96RatvfTDGr7o2mU9VKSavWw9t7w/2SG9is8SPH9R/jzYW8G8EPXhPdkvIb1RCyC+OXlZvdCfpz1pKow+L9gOvNNVeD3+OB\
                                        k+me2qvYYbmjk6R6A9IseHPJiitDubXiQ9UiLoPFxkEr6U/d29hsjBvZg0B76G7J69SLGdPAK9Gj60zfY7A7HUvQ2/+70+jKO9lTL9OxuNeb2a/L\
                                        u9BguKvCEnkb1GT809PMEfPg88m73dlnm9b1c8Pfz7QT67u5w98PaSvoTpUT3hsaA9hfu3vE/7xLyBOTg+ZpQ8PdAoej6mkZu8/H4nPvs9Fz7uuB\
                                        u+N7FEPQoAWT3G1lY+pW6YPau1Jz52In49wNkXPigFO7wTkji+hpscPZI8LzzGNQ097ZKCPCLoHbxKv6O9ITGTPdlAgLyQdV88QYhBPScQ1rmLfO\
                                        I96//evVlAUb7qqwW+ayDgvJz7Cb6qx5i9bwmjvUjndb07DBa9gXqqPL5PoT0d1MA93rTlPJ79uD06IY485+QHPSJWLD4MYIg9p5lEvaJXEj2U3C\
                                        47eTw/PIX4TbzeWyc980BrvX6etD4m+XC9dAkuPorxCLyDB6m+RnwHPh6G4D3/Qr69+Z8cvu+Mmz1vOJY9ohVAPDQ2ND1SgEi9UTjkPBpt7L3V8e\
                                        A8ddj/PL+7pj17bg49M3Ogvr4x+z3+YFq9RQWcvgAQDL67lS28mKB0PAkQRDwxaL27nEWHPUoGCz2WV7I9KzeJvMDxWL5J7p89/RfIPTCo0D3K1l\
                                        G+rgDOPSc05T0WfJ09XUYIPjIwYDzZEck7lNZQPck9vjwrQ9A9z7BHvi974b0J3ZI78yYhPeebCD3/tIG+fZz1PNDmgb3Z8gA83Sy2vK+crr1z9X\
                                        09mX7VPS8doD1gGCE+LYvNPdafp7xLkWa8GnKIvVhBDL0BgAy+AO+JvG5+C74acOq95b09vIPFkb0oiKc9nIKgOwrNDj77QnQ92gHPPe8rOT1Mhi\
                                        E9h9FZPVyzk70SQ7g9f+U6PpshpTxeCQW+V4u8PRq7eb3wcxA+f1qtvXMHLb7TbNU93d6/PUBMbj3Kt/M9FjdqviwBqr1LCUS+q+WGPGkAMD3Fj4\
                                        g9bh4pvs27l70OKBa9XyOQPUX/Or2vsic836n0vD0xy7xPmAi+tYEaPeQEbT09HiA9jHuDvUZtsTyZmZu7Sb1Svt5mVD3xymC9tZBCPSyywLtBli\
                                        A9/MTZvP3yJD62kQ099J30PVKtQz3lP2Y9oGoJPp7+AL5UWZC9NowJO3l5CbzDLH49ZQ0gPtax6T1zXnA+D76bvYafYD16wbC9qdmbvdaOgbu1YL\
                                        290P0fvaYr1j0AvZG9Y2YtPk0koL79Jmm+jqzhPb+PQz0b0h2+8SfjvNtsrz1EGz89KBStuELgxjw2bX49MWicPONmF75YQEo92eALPO2VYL0Phn\
                                        m+2GLRvbTjCz5Ajxq+SBKvPZpJ4bxk2pw74B05PWT+f70hO/C92f2zvRHQT762Uyg9G+5iPX4LBr3aqHK9kJQTvvy2H71ZxqA9ciZUvsOTlb3IbL\
                                        892UtgPazSOL0WA9I9FdTLPPIJBj7GJB89GrjUvUdlvb25eDu9oiAQvcOfNL61wUY9B66RPUklBr4WCEa9fO9/vfTE5rzI15o9DuzXu5kIbL2QiI\
                                        q8vJ8gvhdagjyTWxU+bBLyPY3fg7xzDo69yu+5PM+s0j0iL4U9rW2sPK5hDD6iCgK+u/DtPOnQVb0RmQ+97LmgPEDKWLzEZCy+Hy2HvAEkJL4zHx\
                                        g+hl4GvvcJ6L2AY5k8l9wEvoF73zzV9KK9w9klvO+RSr0WtRK9H9iRO5vnSr3Sxoo95DPXvTWl+j0ZrmO+HkGIPXL7gT2+ttW9VHRRvcFBtD1GIZ\
                                        I9a5cJvnDW6r0wgjs8ugtWPcwObzwiS6U9XtipPfqBJLxy4Vg832+hvS1k3T35VSM+b5+hOx6gG72eme48azyKvltm5r1LojO9gCNKPvpfQDpaaN\
                                        m8c88BPQ7DYL1+oiw+XiRhPT/abL6Kukg9lcshvnJigD4YEVs+hLA1vkd1zb1Q6Le96AabvM2pwj3M3tm8dAq/PZ7iC75X5CI+T8/dvX/6n73urY\
                                        i+j7zePXfqWL1qWs+9DO8cvFgofLslchO+/GZ1vLzF3T03v2u+R23XPbOnMT31waY96JLIPDtcVj4d2lc+9AsIPrzBTb7lU669SfQ4Pg/qSrpDly\
                                        s84chAPcJ/S762AGE9flyavdgTgT1GsZw9h9zVPFPCQj4wo9y9QXdoPUbdn70NDaS91bfuPVYdA74dvpQ9MorwPZ+ZiL6FA0W+kBPwPYduq715nD\
                                        S9TxfevHISGTzk57u6aDa2vHxIVr4iLde9xbu3Pb38vrzPkCC+IQc5PiCyS7wdB6O9lWHfPbTKHLzsv+e9wdphO0ydvTxeIru8ZNJoPfQYxr16ZY\
                                        w+ULwNvuhmYz4FgDE+CIsxvq140r31PlA+IuzWu7p0xr0lLNA8gpTWvcFuAbv5wHu8CbAEvfzZ+7xuRya8sc87PiqijT0kPUi9slOvPRqxlj1ABR\
                                        K+cXGivmxqmj13t7K8UhaGPTVIvb1p8qm85cQNvdlnUrwoDrq9ovSOPfAJ/r3JDFU+MqXWvYTdiT0oOA+90xDPu0RO8r2Cou29gT+uPYByBz0mcZ\
                                        m9ZnvmPcNRQj4JZho8Mm1vPiwEC746s0e9FYLePS3t/Lxr5MK9RQO5PDbYmL0awKU9ZNaNvbl3kzmPuI682dVJvssITL2SXSU8FB0SvrTghz3giW\
                                        s9J6tNPls+Hz6RGCO+LyLfPYI9WzwcMBu86N6jPP8UGr3Fs8U9QXIPPltXmj1KkBI+pmxaPfpXlzxK8JQ999r/PbnuDz6ZotO9IJlbvQxdrb1lA6\
                                        u9NFMOvmHzs70HY5e9zyx4vYcvrT2zuOc9POBqPc/LhD0gP6Y9Vjl6PRr2473pxZK8OLpKOwGv6L3Y4Gi9zgnCPSVeAT7Yko28t9mMvU1Okb0dGe\
                                        u8RBhSvkWOIL3o8Ys8M7SMO96vaD0LpQu+AVTSvYE4Ob6ls44+7zKfvVVTqr2fSu49Nvi2uxc8mb2aeva9Tlw5vEqWMb5wcBc9uC8svLXz4rsviS\
                                        k9AdMOPVEjez08EDS864O5PFo71ztH2q29CRcKvtLEIb5IFKq+/87EvSl5CD0bs5A9n9+9vPAbmT0iH6G9l9k+Pm4d570t1zC+G0VRvJCxgD3t6i\
                                        S+XFdOviQ/mL3ZBk4+Oq6EvnCHtD0HUvk9tC0aPcZ/mjxrSZM9y368PbCtubyiMuk8Nkmnvb6ciD3lEIW9VcnZPQ513jsKCHy89UpVPVS3Tj4B89\
                                        q7dpUDvumQHT78J+c93E6bPWX2Cj7uyU4+BaFUvvYs2b0Pie876/dXvdKejT0h1Xe+JUr/veGq4bvpkoq+/I3BO3SKh7weH6I8urSivVbJdr0ZV6\
                                        27KC7ju8rGu72Z3fE+xpicvUe3dD5U23G8C7sJv45ETz7fC00+M8hMvqSDPz1MGEo+6EgJPvNOMj0YrW49rAd2ParVJj1uJFO+bMIQPtMSEr4W1D\
                                        k9be0vvjoZBzv07aI9H+WHPkWgij0Pd9y9AIDGPT7RNL3jMo094BotPd76Cj1fLJU9vGDBvdXWN7xG90S9zKUwPQvIBj67bVg9XHyHPffiGz2Tu0\
                                        29lwHkvQ6Cdb1LLZY7PL8/O/TkDb27MJK8FI9JvcS6yLyHIe49vIUkPpqCOD5lQoM+NXphvTqAHj40smo+hMCAvZfJbr6i6AM93zA+vtiO1jy2gV\
                                        Y9EXEhPRY61T3ivv+9tjquPcNINL7EAJy9C4ofvs6LDL6O2we+0ygJvkHL/DsI1qi9u+oEvVoKc7xulQs+WQAavqtl17z1FJM9HQpnvWJdjL7G5j\
                                        k+lzfnPONXQr2uzM09S+ECPjCIKj6dU0I+J1ZWvgKbtb0To5E9qanIvQr2oDwNZxi9obIIPefJM73ep2o+Qf6rPgxbfb2dYU++ojH/vXQ0Ij2Lfw\
                                        Y+5ijNPAxAGL6xZd87r8xmPamdLj39Fkw9fZwRPCVjoDo+LxQ9g58mvrKCM70hVRe+aFNNvZoTLT4Dmyk+zIBvve4XMT7obwW9o+GwPGglerz15L\
                                        a8TMudvXdGqjwwMTu9RhGCPbYB1bytXDc9tymoPdSs5Ty6SLm9Q4LXPMzsqbutcqO880/mPUgqrz3PIb6+7ERxvBJ9XT0NNry9NAf9vLHwFrwk1x\
                                        O+DST5PDay67w+Gje7QcavPUoWV71c/+06DhIkPUukMT5Vl0Y9t/QMvLmdibyCeEa9NPWqPXu/P730gxI+N1sgvqmhpTwEDSI9Q2DzvBa0nb2cIp\
                                        c97aFoPsBPyb1jgs+9ZRtcPRBb67wl2V692zSTvRdt6zyBPoW9Qk9zvfYPOb1LgHi9iiqAPV/TXb1Mw189BpMOO6JMWzyT8P68+GAuvQVHpzxdRI\
                                        G+GG/Hu+4afD0/cju9pzj5PNV6hLsFgG69cYzwvI0W7Dut6Xe+yEF3vf5yhr2XpBC+CNLQvbgsRz7aUtc9SknvvQTvuryNidC98FoDPPJlVL1oCX\
                                        W9MOsWPoq3sj1VLAU+XulZPEuFO76pj+c9If5uPVMWbL7GsBe9/MLZPb8JBj7ej0m9qlIgvpTOLTz8c2i+Ru/+Pc5EYD7e8P486AaqPQFtobwbHe\
                                        q9Qh5KPjoTrz1T/9u9TXMsvuVXuj2dTa88tj0RPVv0hrtn+6U9ui20vMMj2z0WBrq9BiCdvH8vgzzkeEu9/1UMvsfl67wM8aA9A58Nvs0dT7xpDL\
                                        w+x2uyPa/RWL1RDwq9HVXSvA+nTz0HElG9il/UPmpTez0SSGQ+HaVjPC6mdr4n9UQ+k3vzPUUzOL46K6Y9Qk67PeuZTD2HxHY8MWtyvcSWVD3RNa\
                                        u9x9ckvVLbur3VP0M9KyUkvj1kJTpIjQ89BeypvceL+b3tXRy9qZNXOp567zypXMW9EQPUvR1qPb6xo+G9o7qXvmjH7DxCePM9MRLYvJky5T2jO4\
                                        M9kuszvrjtFr1uJ7A9KDrTvSqf+Ty/Hxw9VxC1vbJMzL1PLpS8gQu2vW0OqDyHrsq8kUSqvYisHL509js89/OpvLt2573Lu366U28WvucehL5Dzz\
                                        6++ILZvfP0o7wQMQy8m6BCPQORi7y0Wo08jKCyvOSYjD58E+49dyyFPrKAsrz3QyG+szUnvhHf6725S+G9rOXQvSinuT1/pDW+04uYvReonzwfzZ\
                                        c9MnRsPZEAq70pqX8+8Js1vZd5Hz1J5eq80M/GPZnzvD0alAc7v36LvWoqsr5kvNI9Hv0lvratV73O89G7nJaOvct7Ej1dV569GCxFvdYUWL3b2h\
                                        s+cQV+vfEcGb49e6i8vXihPTb0/L2GsIq98CfGvJr5cLx9uAE+VHEgvUBeVT2rbPs8tB7qvdeCjD6PUI89umd8viRDGb0Gdoa8NMcRvkAYQL6WJh\
                                        Q90UgHPT//lDyiYFs9SrIKPsc8qT18MWY+R2yXPWj2XL6WCgo+dbG2vSsn/z3DxQI+54iJvVwIzz1zS9w9nGO9vdTUEr4hrls+rDwuvTEEiT2HJr\
                                        88R18PPh8Og7rz+tG944pYPLNQPru6DBy9HW3dO8qsCD4p5bM+VXCCPZ3bg75aJS8+cZsMO+31Fr4="
                                      }
                                    }, 
                                    "dtype": {"type": "DT_FLOAT"}
                                  }
                                }, 
                                {
                                  "name": "StatefulPartitionedCall/args_7", 
                                  "op": "Const", 
                                  "attr": {
                                    "dtype": {"type": "DT_FLOAT"}, 
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_FLOAT", 
                                        "tensorShape": {"dim": [{"size": "16"}]}, 
                                        "tensorContent": "VTu6u71dOD2JeJM7Q5orPVBksjxbm3W9/DTDPCzBrbyYhEK8diQIPW7aUbwlns07niC/PYvKhrv8bzi980PEPA=="
                                      }
                                    }
                                  }
                                }, 
                                {
                                  "name": "strided_slice_1/stack", 
                                  "op": "Const", 
                                  "attr": {
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_INT32", 
                                        "tensorShape": {"dim": [{"size": "4"}]}, 
                                        "tensorContent": "AAAAAAAAAAAAAAAAAwAAAA=="
                                      }
                                    }, 
                                    "dtype": {"type": "DT_INT32"}
                                  }
                                }, 
                                {
                                  "name": "strided_slice_1/stack_1",
                                  "op": "Const", 
                                  "attr": {
                                    "dtype": {"type": "DT_INT32"}, 
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_INT32", 
                                        "tensorShape": {"dim": [{"size": "4"}]}, 
                                        "tensorContent": "AAAAAAAAAAAAAAAABAAAAA=="
                                      }
                                    }
                                  }
                                }, 
                                {
                                  "name": "strided_slice_1/stack_2", 
                                  "op": "Const", 
                                  "attr": {
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_INT32", 
                                        "tensorShape": {"dim": [{"size": "4"}]}, 
                                        "tensorContent": "AQAAAAEAAAABAAAAAQAAAA=="
                                      }
                                    }, 
                                    "dtype": {"type": "DT_INT32"}
                                  }
                                }, 
                                {
                                  "name": "clip_by_value_1/Minimum/y", 
                                  "op": "Const", 
                                  "attr": {
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_FLOAT", 
                                        "tensorShape": {}, 
                                        "floatVal": [1.0]
                                      }
                                    }, 
                                    "dtype": {"type": "DT_FLOAT"}
                                  }
                                }, 
                                {
                                  "name": "clip_by_value_1/y", 
                                  "op": "Const", 
                                  "attr": {
                                    "value": {
                                      "tensor": {
                                        "dtype": "DT_FLOAT", 
                                        "tensorShape": {}, 
                                        "floatVal": [0.0]
                                      }
                                    }, 
                                    "dtype": {"type": "DT_FLOAT"}
                                  }
                                }, 
                                {
                                  "name": "Greater_1/y", 
                                  "op": "Const", 
                                  "attr": {"value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {}, "floatVal": [0.10000000149011612]}}, "dtype": {"type": "DT_FLOAT"}}
                                }, 
                                {
                                  "name": "strided_slice", 
                                  "op": "StridedSlice", 
                                  "input": ["x", "strided_slice/stack", "strided_slice/stack_1", "strided_slice/stack_2"], 
                                  "attr": {
                                    "begin_mask": {"i": "7"}, 
                                    "shrink_axis_mask": {"i": "0"}, 
                                    "ellipsis_mask": {"i": "0"}, 
                                    "end_mask": {"i": "7"}, 
                                    "Index": {"type": "DT_INT32"}, 
                                    "new_axis_mask": {"i": "0"}, 
                                    "T": {"type": "DT_FLOAT"}
                                  }
                                }, 
                                {
                                  "name": "Func/StatefulPartitionedCall/input_control_node/_0", 
                                  "op": "NoOp", 
                                  "input": [
                                    "^StatefulPartitionedCall/args_4", 
                                    "^StatefulPartitionedCall/args_5", 
                                    "^StatefulPartitionedCall/args_6", 
                                    "^StatefulPartitionedCall/args_7", 
                                    "^angle", 
                                    "^fire_rate", 
                                    "^step_size", 
                                    "^x"
                                  ]
                                }, 
                                {
                                  "name": "clip_by_value/Minimum", 
                                  "op": "Minimum", 
                                  "input": ["strided_slice", "clip_by_value/Minimum/y"], 
                                  "attr": {"T": {"type": "DT_FLOAT"}}
                                }, 
                                {
                                  "name": "StatefulPartitionedCall/strided_slice/stack", 
                                  "op": "Const", 
                                  "input": ["^Func/StatefulPartitionedCall/input_control_node/_0"], 
                                  "attr": {
                                    "dtype": {"type": "DT_INT32"}, 
                                    "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AAAAAAAAAAAAAAAAAAAAAA=="}}
                                  }, 
                                  "experimentalDebugInfo": {"originalNodeNames": ["strided_slice/stack"], "originalFuncNames": ["__inference_step_12891"]}
                                }, 
                                {
                                  "name": "StatefulPartitionedCall/strided_slice/stack_1", 
                                  "op": "Const", 
                                  "input": ["^Func/StatefulPartitionedCall/input_control_node/_0"], 
                                  "attr": {
                                    "dtype": {"type": "DT_INT32"}, 
                                    "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AAAAAAAAAAAAAAAAAQAAAA=="}}
                                  }, 
                                  "experimentalDebugInfo": {"originalNodeNames": ["strided_slice/stack_1"], "originalFuncNames": ["__inference_step_12891"]}
                                }, 
                                {
                                  "name": "StatefulPartitionedCall/strided_slice/stack_2", 
                                  "op": "Const", 
                                  "input": ["^Func/StatefulPartitionedCall/input_control_node/_0"], 
                                  "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AQAAAAEAAAABAAAAAQAAAA=="}}}, 
                                  "experimentalDebugInfo": {"originalNodeNames": ["strided_slice/stack_2"], "originalFuncNames": ["__inference_step_12891"]}
                                }, 
                                {
                                  "name": "Func/StatefulPartitionedCall/input/_1", "op": "Identity", "input": ["x", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL1BhcnRpdGlvbmVkQ2FsbC9pbnB1dC9fMTI="]}}, "T": {"type": "DT_FLOAT"}}
                                }, 
                                {"name": "Func/StatefulPartitionedCall/input/_2", "op": "Identity", "input": ["fire_rate", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Func/StatefulPartitionedCall/input/_3", "op": "Identity", "input": ["angle", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"T": {"type": "DT_FLOAT"}, "_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL1BhcnRpdGlvbmVkQ2FsbC9pbnB1dC9fMTM="]}}}}, 
                                {"name": "Func/StatefulPartitionedCall/input/_4", "op": "Identity", "input": ["step_size", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Func/StatefulPartitionedCall/input/_5", "op": "Identity", "input": ["StatefulPartitionedCall/args_4", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Func/StatefulPartitionedCall/input/_6", "op": "Identity", "input": ["StatefulPartitionedCall/args_5", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Func/StatefulPartitionedCall/input/_7", "op": "Identity", "input": ["StatefulPartitionedCall/args_6", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Func/StatefulPartitionedCall/input/_8", "op": "Identity", "input": ["StatefulPartitionedCall/args_7", "^Func/StatefulPartitionedCall/input_control_node/_0"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11", "op": "NoOp", "input": ["^Func/StatefulPartitionedCall/input_control_node/_0"]}, 
                                {"name": "clip_by_value", "op": "Maximum", "input": ["clip_by_value/Minimum", "clip_by_value/y"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {
                                  "name": "StatefulPartitionedCall/strided_slice", 
                                  "op": "StridedSlice", 
                                  "input": [
                                    "Func/StatefulPartitionedCall/input/_1", 
                                    "StatefulPartitionedCall/strided_slice/stack", 
                                    "StatefulPartitionedCall/strided_slice/stack_1", 
                                    "StatefulPartitionedCall/strided_slice/stack_2"
                                  ], 
                                  "attr": {
                                    "Index": {"type": "DT_INT32"}, 
                                    "new_axis_mask": {"i": "0"}, 
                                    "T": {"type": "DT_FLOAT"}, 
                                    "begin_mask": {"i": "15"}, 
                                    "shrink_axis_mask": {"i": "0"}, 
                                    "ellipsis_mask": {"i": "0"}, 
                                    "end_mask": {"i": "7"}
                                  }, 
                                  "experimentalDebugInfo": {"originalNodeNames": ["strided_slice"], "originalFuncNames": ["__inference_step_12891"]}
                                }, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d/Conv2D/ReadVariableOp", "op": "Identity", "input": ["Func/StatefulPartitionedCall/input/_5"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d/BiasAdd/ReadVariableOp", "op": "Identity", "input": ["Func/StatefulPartitionedCall/input/_6"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d_1/Conv2D/ReadVariableOp", "op": "Identity", "input": ["Func/StatefulPartitionedCall/input/_7"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d_1/BiasAdd/ReadVariableOp", "op": "Identity", "input": ["Func/StatefulPartitionedCall/input/_8"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul/y", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {"dim": [{"size": "3"}, {"size": "3"}]}, "tensorContent": "AAAAvgAAAAAAAAA+AACAvgAAAAAAAIA+AAAAvgAAAAAAAAA+"}}, "dtype": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul/y"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul_1/y", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {"dim": [{"size": "3"}, {"size": "3"}]}, "tensorContent": "AAAAvgAAgL4AAAC+AAAAAAAAAAAAAAAAAAAAPgAAgD4AAAA+"}}, "dtype": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul_1/y"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul_2/y", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {"dim": [{"size": "3"}, {"size": "3"}]}, "tensorContent": "AAAAvgAAAAAAAAA+AACAvgAAAAAAAIA+AAAAvgAAAAAAAAA+"}}, "dtype": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul_2/y"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul_3/y", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {"dim": [{"size": "3"}, {"size": "3"}]}, "tensorContent": "AAAAvgAAgL4AAAC+AAAAAAAAAAAAAAAAAAAAPgAAgD4AAAA+"}}, "dtype": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul_3/y"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/stack", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {"dim": [{"size": "3"}, {"size": "3"}]}, "tensorContent": "AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAA"}}, "dtype": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["stack"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/stack_1/values_0", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_FLOAT", "tensorShape": {"dim": [{"size": "3"}, {"size": "3"}]}, "tensorContent": "AAAAAAAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAAAAAAAAA"}}, "dtype": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["stack_1/values_0"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/strided_slice/stack", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AAAAAAAAAAAAAAAAAAAAAA=="}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["strided_slice/stack"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/strided_slice/stack_1", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AAAAAAAAAAAAAAAAAAAAAA=="}}}, "experimentalDebugInfo": {"originalNodeNames": ["strided_slice/stack_1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/strided_slice/stack_2", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AQAAAAEAAAABAAAAAQAAAA=="}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["strided_slice/stack_2"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/repeats", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {}, "intVal": [16]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/repeats"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Shape", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AwAAAAMAAAABAAAAAwAAAA=="}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Shape"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/ExpandDims/dim", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {}, "intVal": [3]}}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/ExpandDims/dim"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/0", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {}, "intVal": [1]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Tile/multiples/0"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/1", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {}, "intVal": [1]}}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Tile/multiples/1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/2", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {}, "intVal": [1]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Tile/multiples/2"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/4", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {}, "intVal": [1]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Tile/multiples/4"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice/stack", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "1"}]}, "intVal": [0]}}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice/stack"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice/stack_1", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "1"}]}, "intVal": [2]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice/stack_1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice/stack_2", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "1"}]}, "intVal": [1]}}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice/stack_2"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1/stack", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "1"}]}, "intVal": [3]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice_1/stack"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1/stack_1", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "1"}]}, "intVal": [0]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice_1/stack_1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1/stack_2", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "1"}]}, "intVal": [1]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice_1/stack_2"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/concat/values_1", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "1"}]}, "intVal": [-1]}}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/concat/values_1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/concat/axis", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {}, "intVal": [0]}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/concat/axis"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/depthwise/Shape", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "4"}]}, "tensorContent": "AwAAAAMAAAAQAAAAAwAAAA=="}}, "dtype": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["depthwise/Shape"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/depthwise/dilation_rate", "op": "Const", "input": ["^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"dtype": {"type": "DT_INT32"}, "value": {"tensor": {"dtype": "DT_INT32", "tensorShape": {"dim": [{"size": "2"}]}, "tensorContent": "AQAAAAEAAAA="}}}, "experimentalDebugInfo": {"originalNodeNames": ["depthwise/dilation_rate"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "Func/StatefulPartitionedCall/PartitionedCall/input/_12", "op": "Identity", "input": ["Func/StatefulPartitionedCall/input/_1", "^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Func/StatefulPartitionedCall/PartitionedCall/input/_13", "op": "Identity", "input": ["Func/StatefulPartitionedCall/input/_3", "^Func/StatefulPartitionedCall/PartitionedCall/input_control_node/_11"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "MaxPool2d", "op": "MaxPool", "input": ["clip_by_value"], "attr": {"ksize": {"list": {"i": ["1", "3", "3", "1"]}}, "strides": {"list": {"i": ["1", "1", "1", "1"]}}, "T": {"type": "DT_FLOAT"}, "padding": {"s": "U0FNRQ=="}, "data_format": {"s": "TkhXQw=="}}}, 
                                {"name": "StatefulPartitionedCall/Shape", "op": "Shape", "input": ["StatefulPartitionedCall/strided_slice"], "attr": {"out_type": {"type": "DT_INT32"}, "T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["Shape"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "Func/StatefulPartitionedCall/output_control_node/_10", "op": "NoOp", "input": ["^StatefulPartitionedCall/sequential/conv2d/BiasAdd/ReadVariableOp", "^StatefulPartitionedCall/sequential/conv2d/Conv2D/ReadVariableOp", "^StatefulPartitionedCall/sequential/conv2d_1/BiasAdd/ReadVariableOp", "^StatefulPartitionedCall/sequential/conv2d_1/Conv2D/ReadVariableOp"]}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Cast", "op": "Cast", "input": ["StatefulPartitionedCall/PartitionedCall/Repeat/repeats"], "attr": {"SrcT": {"type": "DT_INT32"}, "Truncate": {"b": false}, "DstT": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Cast"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice", "op": "StridedSlice", "input": ["StatefulPartitionedCall/PartitionedCall/Repeat/Shape", "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice/stack", "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice/stack_1", "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice/stack_2"], "attr": {"Index": {"type": "DT_INT32"}, "new_axis_mask": {"i": "0"}, "T": {"type": "DT_INT32"}, "begin_mask": {"i": "1"}, "shrink_axis_mask": {"i": "0"}, "ellipsis_mask": {"i": "0"}, "end_mask": {"i": "0"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1", "op": "StridedSlice", "input": ["StatefulPartitionedCall/PartitionedCall/Repeat/Shape", "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1/stack", "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1/stack_1", "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1/stack_2"], "attr": {"Index": {"type": "DT_INT32"}, "new_axis_mask": {"i": "0"}, "T": {"type": "DT_INT32"}, "begin_mask": {"i": "0"}, "shrink_axis_mask": {"i": "0"}, "ellipsis_mask": {"i": "0"}, "end_mask": {"i": "1"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/strided_slice_1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Cos", "op": "Cos", "input": ["Func/StatefulPartitionedCall/PartitionedCall/input/_13"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["Cos"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Sin", "op": "Sin", "input": ["Func/StatefulPartitionedCall/PartitionedCall/input/_13"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["Sin"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "Greater", "op": "Greater", "input": ["MaxPool2d", "Greater/y"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "StatefulPartitionedCall/random_uniform/RandomUniform", "op": "RandomUniform", "input": ["StatefulPartitionedCall/Shape"], "attr": {"dtype": {"type": "DT_FLOAT"}, "seed2": {"i": "0"}, "T": {"type": "DT_INT32"}, "seed": {"i": "0"}}, "experimentalDebugInfo": {"originalNodeNames": ["random_uniform/RandomUniform"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples", "op": "Pack", "input": ["StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/0", "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/1", "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/2", "StatefulPartitionedCall/PartitionedCall/Repeat/Cast", "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples/4"], "attr": {"N": {"i": "5"}, "T": {"type": "DT_INT32"}, "axis": {"i": "0"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Tile/multiples"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/concat", "op": "ConcatV2", "input": ["StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice", "StatefulPartitionedCall/PartitionedCall/Repeat/concat/values_1", "StatefulPartitionedCall/PartitionedCall/Repeat/strided_slice_1", "StatefulPartitionedCall/PartitionedCall/Repeat/concat/axis"], "attr": {"Tidx": {"type": "DT_INT32"}, "N": {"i": "3"}, "T": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/concat"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul", "op": "Mul", "input": ["StatefulPartitionedCall/PartitionedCall/Cos", "StatefulPartitionedCall/PartitionedCall/mul/y"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul_3", "op": "Mul", "input": ["StatefulPartitionedCall/PartitionedCall/Cos", "StatefulPartitionedCall/PartitionedCall/mul_3/y"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul_3"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul_1", "op": "Mul", "input": ["StatefulPartitionedCall/PartitionedCall/Sin", "StatefulPartitionedCall/PartitionedCall/mul_1/y"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul_1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/mul_2", "op": "Mul", "input": ["StatefulPartitionedCall/PartitionedCall/Sin", "StatefulPartitionedCall/PartitionedCall/mul_2/y"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul_2"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/Less", "op": "Less", "input": ["StatefulPartitionedCall/random_uniform/RandomUniform", "Func/StatefulPartitionedCall/input/_2"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["Less"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/sub", "op": "Sub", "input": ["StatefulPartitionedCall/PartitionedCall/mul", "StatefulPartitionedCall/PartitionedCall/mul_1"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["sub"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/add", "op": "AddV2", "input": ["StatefulPartitionedCall/PartitionedCall/mul_2", "StatefulPartitionedCall/PartitionedCall/mul_3"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["add"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/Cast", "op": "Cast", "input": ["StatefulPartitionedCall/Less"], "attr": {"DstT": {"type": "DT_FLOAT"}, "SrcT": {"type": "DT_BOOL"}, "Truncate": {"b": false}}, "experimentalDebugInfo": {"originalNodeNames": ["Cast"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/stack_1", "op": "Pack", "input": ["StatefulPartitionedCall/PartitionedCall/stack_1/values_0", "StatefulPartitionedCall/PartitionedCall/sub", "StatefulPartitionedCall/PartitionedCall/add"], "attr": {"axis": {"i": "-1"}, "N": {"i": "3"}, "T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["stack_1"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/strided_slice", "op": "StridedSlice", "input": ["StatefulPartitionedCall/PartitionedCall/stack_1", "StatefulPartitionedCall/PartitionedCall/strided_slice/stack", "StatefulPartitionedCall/PartitionedCall/strided_slice/stack_1", "StatefulPartitionedCall/PartitionedCall/strided_slice/stack_2"], "attr": {"Index": {"type": "DT_INT32"}, "new_axis_mask": {"i": "4"}, "T": {"type": "DT_FLOAT"}, "begin_mask": {"i": "11"}, "shrink_axis_mask": {"i": "0"}, "ellipsis_mask": {"i": "0"}, "end_mask": {"i": "11"}}, "experimentalDebugInfo": {"originalNodeNames": ["strided_slice"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/ExpandDims", "op": "ExpandDims", "input": ["StatefulPartitionedCall/PartitionedCall/strided_slice", "StatefulPartitionedCall/PartitionedCall/Repeat/ExpandDims/dim"], "attr": {"T": {"type": "DT_FLOAT"}, "Tdim": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/ExpandDims"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Tile", "op": "Tile", "input": ["StatefulPartitionedCall/PartitionedCall/Repeat/ExpandDims", "StatefulPartitionedCall/PartitionedCall/Repeat/Tile/multiples"], "attr": {"T": {"type": "DT_FLOAT"}, "Tmultiples": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Tile"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Repeat/Reshape", "op": "Reshape", "input": ["StatefulPartitionedCall/PartitionedCall/Repeat/Tile", "StatefulPartitionedCall/PartitionedCall/Repeat/concat"], "attr": {"T": {"type": "DT_FLOAT"}, "Tshape": {"type": "DT_INT32"}}, "experimentalDebugInfo": {"originalNodeNames": ["Repeat/Reshape"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/depthwise", "op": "DepthwiseConv2dNative", "input": ["Func/StatefulPartitionedCall/PartitionedCall/input/_12", "StatefulPartitionedCall/PartitionedCall/Repeat/Reshape"], "attr": {"T": {"type": "DT_FLOAT"}, "strides": {"list": {"i": ["1", "1", "1", "1"]}}, "data_format": {"s": "TkhXQw=="}, "padding": {"s": "U0FNRQ=="}, "dilations": {"list": {"i": ["1", "1", "1", "1"]}}}, "experimentalDebugInfo": {"originalNodeNames": ["depthwise"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "StatefulPartitionedCall/PartitionedCall/Identity", "op": "Identity", "input": ["StatefulPartitionedCall/PartitionedCall/depthwise"], "attr": {"_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL1BhcnRpdGlvbmVkQ2FsbC9vdXRwdXQvXzE0"]}}, "T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["Identity"], "originalFuncNames": ["__inference_perceive_12864"]}}, 
                                {"name": "Func/StatefulPartitionedCall/PartitionedCall/output/_14", "op": "Identity", "input": ["StatefulPartitionedCall/PartitionedCall/Identity"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d/Conv2D", "op": "Conv2D", "input": ["Func/StatefulPartitionedCall/PartitionedCall/output/_14", "StatefulPartitionedCall/sequential/conv2d/Conv2D/ReadVariableOp"], "attr": {"dilations": {"list": {"i": ["1", "1", "1", "1"]}}, "T": {"type": "DT_FLOAT"}, "strides": {"list": {"i": ["1", "1", "1", "1"]}}, "data_format": {"s": "TkhXQw=="}, "explicit_paddings": {"list": {}}, "use_cudnn_on_gpu": {"b": true}, "padding": {"s": "VkFMSUQ="}}, "experimentalDebugInfo": {"originalNodeNames": ["sequential/conv2d/Conv2D"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d/BiasAdd", "op": "BiasAdd", "input": ["StatefulPartitionedCall/sequential/conv2d/Conv2D", "StatefulPartitionedCall/sequential/conv2d/BiasAdd/ReadVariableOp"], "attr": {"T": {"type": "DT_FLOAT"}, "data_format": {"s": "TkhXQw=="}}, "experimentalDebugInfo": {"originalNodeNames": ["sequential/conv2d/BiasAdd"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d/Relu", "op": "Relu", "input": ["StatefulPartitionedCall/sequential/conv2d/BiasAdd"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["sequential/conv2d/Relu"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d_1/Conv2D", "op": "Conv2D", "input": ["StatefulPartitionedCall/sequential/conv2d/Relu", "StatefulPartitionedCall/sequential/conv2d_1/Conv2D/ReadVariableOp"], "attr": {"padding": {"s": "VkFMSUQ="}, "dilations": {"list": {"i": ["1", "1", "1", "1"]}}, "strides": {"list": {"i": ["1", "1", "1", "1"]}}, "T": {"type": "DT_FLOAT"}, "data_format": {"s": "TkhXQw=="}, "explicit_paddings": {"list": {}}, "use_cudnn_on_gpu": {"b": true}}, "experimentalDebugInfo": {"originalNodeNames": ["sequential/conv2d_1/Conv2D"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/sequential/conv2d_1/BiasAdd", "op": "BiasAdd", "input": ["StatefulPartitionedCall/sequential/conv2d_1/Conv2D", "StatefulPartitionedCall/sequential/conv2d_1/BiasAdd/ReadVariableOp"], "attr": {"T": {"type": "DT_FLOAT"}, "data_format": {"s": "TkhXQw=="}}, "experimentalDebugInfo": {"originalNodeNames": ["sequential/conv2d_1/BiasAdd"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/mul", "op": "Mul", "input": ["StatefulPartitionedCall/sequential/conv2d_1/BiasAdd", "Func/StatefulPartitionedCall/input/_4"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/mul_1", "op": "Mul", "input": ["StatefulPartitionedCall/mul", "StatefulPartitionedCall/Cast"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["mul_1"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/add", "op": "AddV2", "input": ["Func/StatefulPartitionedCall/input/_1", "StatefulPartitionedCall/mul_1"], "attr": {"T": {"type": "DT_FLOAT"}}, "experimentalDebugInfo": {"originalNodeNames": ["add"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "StatefulPartitionedCall/Identity", "op": "Identity", "input": ["StatefulPartitionedCall/add", "^StatefulPartitionedCall/sequential/conv2d/BiasAdd/ReadVariableOp", "^StatefulPartitionedCall/sequential/conv2d/Conv2D/ReadVariableOp", "^StatefulPartitionedCall/sequential/conv2d_1/BiasAdd/ReadVariableOp", "^StatefulPartitionedCall/sequential/conv2d_1/Conv2D/ReadVariableOp"], "attr": {"T": {"type": "DT_FLOAT"}, "_class": {"list": {"s": ["bG9jOkBGdW5jL1N0YXRlZnVsUGFydGl0aW9uZWRDYWxsL291dHB1dC9fOQ=="]}}}, "experimentalDebugInfo": {"originalNodeNames": ["Identity"], "originalFuncNames": ["__inference_step_12891"]}}, 
                                {"name": "Func/StatefulPartitionedCall/output/_9", "op": "Identity", "input": ["StatefulPartitionedCall/Identity"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "strided_slice_1", "op": "StridedSlice", "input": ["Func/StatefulPartitionedCall/output/_9", "strided_slice_1/stack", "strided_slice_1/stack_1", "strided_slice_1/stack_2"], "attr": {"shrink_axis_mask": {"i": "0"}, "ellipsis_mask": {"i": "0"}, "end_mask": {"i": "7"}, "Index": {"type": "DT_INT32"}, "new_axis_mask": {"i": "0"}, "T": {"type": "DT_FLOAT"}, "begin_mask": {"i": "7"}}}, 
                                {"name": "clip_by_value_1/Minimum", "op": "Minimum", "input": ["strided_slice_1", "clip_by_value_1/Minimum/y"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "clip_by_value_1", "op": "Maximum", "input": ["clip_by_value_1/Minimum", "clip_by_value_1/y"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "MaxPool2d_1", "op": "MaxPool", "input": ["clip_by_value_1"], "attr": {"strides": {"list": {"i": ["1", "1", "1", "1"]}}, "T": {"type": "DT_FLOAT"}, "padding": {"s": "U0FNRQ=="}, "data_format": {"s": "TkhXQw=="}, "ksize": {"list": {"i": ["1", "3", "3", "1"]}}}}, 
                                {"name": "Greater_1", "op": "Greater", "input": ["MaxPool2d_1", "Greater_1/y"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "and", "op": "LogicalAnd", "input": ["Greater", "Greater_1"]}, 
                                {"name": "Cast", "op": "Cast", "input": ["and"], "attr": {"Truncate": {"b": false}, "SrcT": {"type": "DT_BOOL"}, "DstT": {"type": "DT_FLOAT"}}}, 
                                {"name": "mul", "op": "Mul", "input": ["Func/StatefulPartitionedCall/output/_9", "Cast"], "attr": {"T": {"type": "DT_FLOAT"}}}, 
                                {"name": "Identity", "op": "Identity", "input": ["mul", "^Func/StatefulPartitionedCall/output_control_node/_10"], "attr": {"T": {"type": "DT_FLOAT"}}}], "versions": {"producer": "1.14", "minConsumer": "1.14"}}, "weightsManifest": []
                              }`],
        { type: 'application/json' }));
  }
}
