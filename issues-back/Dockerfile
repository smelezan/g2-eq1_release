FROM node

RUN mkdir -p /usr/src/issuesBack
WORKDIR /usr/src/issuesBack

COPY package.json /usr/src/issuesBack/

RUN npm install

COPY . /usr/src/issuesBack

EXPOSE 4000
CMD ["npm", "start"]
