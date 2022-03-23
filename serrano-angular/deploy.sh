#!/bin/bash
set -e

printf "Contraseña del remoto (blasdelezo@vps-f81d1879.vps.ovh.net): " 
read -s password
printf "\n"

printf "Construyendo la web\n"
ng b --prod --base-href "./"

printf "Comprimiendo la carpeta dist\n"
tar czvf serrano.tar.gz dist/serrano-angular/

printf "Haciendo scp al servidor\n"
sshpass -p $password scp serrano.tar.gz blasdelezo@vps-f81d1879.vps.ovh.net:

printf "Conectándose al servidor para colocar la web donde debe\n"
sshpass -p $password ssh blasdelezo@vps-f81d1879.vps.ovh.net 'bash -s' << EOF
    printf "Descrompimiendo en el servidor\n"
    tar xzvf serrano.tar.gz
    printf "Borrando web antiguo\n"
    echo $password | sudo -S rm -r /var/www/html/serrano
    printf "Metiendo en /var/www/html/serrano \n"
    echo $password | sudo -S mv dist/serrano-angular /var/www/html/serrano
    printf "Borrando zip\n"
    rm serrano.tar.gz
    printf "Borrando carpeta"
    rm -r dist
EOF

printf "Procesamiento en servidor terminado.\n"
printf "Borrando zip local.\n"
rm serrano.tar.gz
printf "Terminado\n"

