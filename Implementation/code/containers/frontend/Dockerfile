FROM node:14
WORKDIR /application
# Add npm to path
ENV PATH /application/node_modules/.bin:$PATH

COPY ./frontend/package.json /application/package.json

RUN npm install

CMD [ "npm", "start" ]