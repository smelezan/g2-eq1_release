FROM node

RUN mkdir -p /usr/src/projectsBack
WORKDIR /usr/src/projectsBack

COPY package.json /usr/src/projectsBack/

RUN npm install

COPY . /usr/src/projectsBack

EXPOSE 5002
CMD ["npm", "start"]
