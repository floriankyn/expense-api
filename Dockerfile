FROM node:alpine AS development

WORKDIR /ustr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /ustr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /ustr/src/app/dist ./dist

CMD ["node", "dist/main"]


