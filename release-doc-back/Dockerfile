FROM node

RUN mkdir -p /usr/src/release-docBack
WORKDIR /usr/src/release-docBack

COPY package.json /usr/src/release-docBack/

RUN npm install

COPY . /usr/src/release-docBack

EXPOSE 5003
CMD ["npm", "start"]
