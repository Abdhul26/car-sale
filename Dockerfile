FROM node:14.15
WORKDIR /app
COPY . /app
RUN npm run build:production
CMD npm run start:production