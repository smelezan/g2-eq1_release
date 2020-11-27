FROM node

RUN mkdir -p /usr/src/tasksBack
WORKDIR /usr/src/tasksBack

COPY package.json /usr/src/tasksBack/

RUN npm install

COPY . /usr/src/tasksBack

EXPOSE 5000
CMD ["npm", "start"]
