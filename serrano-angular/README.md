# SerranoAngular

Deploy:

cd dist/serrano-angular
zip serrano *
scp serrano.zip  blasdelezo@vps-f81d1879.vps.ovh.net:


ssh en el servidor

cd /var/www/html/serrano/
sudo rm -r *
sudo cp /home/blasdelezo/serrano.zip .
sudo unzip serrano.zip

# Activar entorno:

Crear entorno conda con env.yml
 
`conda env create --file environment.yml`

Activar entorno

`conda activate mangold-env`

instalar cliente angular
`npm install -g @angular/cli@14.0.0`

Instalar paquetes npm
`npm install`
