FROM node:gallium-alpine3.15 as builder

ENV NODE_ENV=production

WORKDIR /app

RUN npm install -g pnpm
COPY ./package.json ./package-lock.json ./
RUN pnpm install --no-frozen-lockfile

COPY . ./
RUN pnpm build

##########

FROM node:lts-alpine as server

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.output /app/.output

CMD [ "node", ".output/server/index.mjs" ]

EXPOSE 3000

##########

FROM nginx:alpine as statics

WORKDIR /app

COPY --from=builder /app/.output/public/ /usr/share/nginx/html/