FROM node:alpine
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
RUN npm install 
EXPOSE 3000
USER node
CMD ["npm" "start"]

