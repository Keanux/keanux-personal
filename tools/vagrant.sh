#!/bin/bash

sudo su

MYSQL_PASSWORD="password"

apt-get update

apt-get install -y python-software-properties
apt-get install -y vim git curl g++

echo "mysql-server mysql-server/root_password password $MYSQL_PASSWORD" | debconf-set-selections
echo "mysql-server mysql-server/root_password_again password $MYSQL_PASSWORD" | debconf-set-selections
apt-get -y install mysql-server

sudo apt-get install -y nodejs npm

mv /usr/bin/nodejs /usr/bin/node

npm install -g supervisor

cd /home/vagrant/keanux
./tools/bootstrap.sh