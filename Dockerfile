FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

COPY .next ./.next

ENV NEXT_PUBLIC_API_URL=http://localhost:3000

CMD ["yarn","dev"]

