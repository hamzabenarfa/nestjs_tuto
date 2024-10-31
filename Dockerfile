FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3005
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]
