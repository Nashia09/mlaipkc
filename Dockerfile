FROM node:18.12.1
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm run build
EXPOSE 5173
CMD [ "npm", "run", "dev" ]