FROM node:gallium-alpine3.15 as builder

ENV NODE_ENV=production

WORKDIR /app

COPY . ./
RUN npm install -g pnpm
RUN pnpm install --no-frozen-lockfile

RUN mv .env.example .env
RUN pnpm build

##########

FROM node:gallium-alpine3.15 as server

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.output /app/.output

CMD [ "node", ".output/server/index.mjs" ]

EXPOSE 3000

##########

FROM nginx:alpine as statics

WORKDIR /app

COPY --from=builder /app/.output/public/ /usr/share/nginx/html/