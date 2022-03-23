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