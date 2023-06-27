FROM node:16.20-alpine as builder

WORKDIR /app
ENV PNPM_VERSION=8.6.1

RUN npm install -g pnpm

ENV PNPM_STORE_DIR="/usr/.pnpm-store"
RUN pnpm config set store-dir "$PNPM_STORE_DIR"

COPY pnpm-lock.yaml ./
RUN --mount=type=cache,target=$PNPM_STORE_DIR \
    pnpm fetch --prod

COPY . .
RUN mv .env.example .env
RUN --mount=type=cache,target=$PNPM_STORE_DIR \
    pnpm install --prod --offline --force && \
    pnpm build

##########

FROM node:16.20-alpine as server

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.output /app/.output

CMD [ "node", ".output/server/index.mjs" ]

EXPOSE 3000

##########

FROM nginx:alpine as statics

WORKDIR /app

COPY --from=builder /app/.output/public/ /usr/share/nginx/html/
