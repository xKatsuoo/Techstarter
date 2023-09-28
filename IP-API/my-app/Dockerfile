FROM node:14
WORKDIR /app
COPY package*.json ./
COPY public ./public
COPY src ./src
RUN npm install
ENV PORT 80
EXPOSE 80

CMD ["npm", "start"]
