FROM node:current-alpine3.10
WORKDIR /usr/src/app
COPY [".", "."]
RUN npm install 
EXPOSE 3000
USER node
CMD ["npm", "start"]

