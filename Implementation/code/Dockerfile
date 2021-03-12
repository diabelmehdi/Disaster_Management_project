FROM mdoerges/debian-buster-nginx
WORKDIR /application
# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Installing openjdk
RUN apt-get update
RUN apt-get install sudo -y
RUN mkdir -p /usr/share/man/man1mkdir -p /usr/share/man/man1
RUN apt-get install man -y
RUN apt-get install default-jre -y
RUN apt-get install maven -y
# Installing node
RUN apt-get install curl software-properties-common -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install nodejs -y
# Install Postgres
RUN apt install postgresql postgresql-contrib -y
# RUN service postgresql start
# Exposing Ports
# Api Port
EXPOSE 5432
EXPOSE 8080 
# Frontend Port
EXPOSE 80

# Copy Backend
COPY ./backend /application/backend

# Copy Frontend
COPY ./frontend /application/frontend

# Build production JAR
RUN mvn package -f /application/backend/pom.xml -Dmaven.test.skip=true

# Build Frontend
ENV PATH /application/node_modules/.bin:$PATH
RUN npm --prefix /application/frontend ci
RUN npm --prefix /application/frontend run build

# COPY startup
COPY ./startup.sh /application/startup.sh
RUN chmod +x /application/startup.sh

ENTRYPOINT ["/application/startup.sh"]





