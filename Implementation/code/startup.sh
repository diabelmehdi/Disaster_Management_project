#!/bin/sh
sed -i "s/peer/trust/g" /etc/postgresql/11/main/pg_hba.conf
sed -i "s/md5/trust/g" /etc/postgresql/11/main/pg_hba.conf
# Start postgres
service postgresql restart
# Create user
sudo -u postgres createuser -s $(whoami)
sudo -u postgres createdb $(whoami)
psql -c "CREATE DATABASE victims_db"
# Start frontend server
service nginx start
java -jar ./backend/target/DisasterAPI.jar
