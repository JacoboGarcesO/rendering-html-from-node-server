FROM node:12-alpine as node
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 7007
CMD ["node", "index.js"]