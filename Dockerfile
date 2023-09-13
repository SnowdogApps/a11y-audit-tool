FROM node:18.17-alpine as builder

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm fetch --prod

COPY . ./
RUN mv .env.example .env
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --prod --offline --frozen-lockfile
RUN pnpm build

##########

FROM node:18.17-alpine as server

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.output /app/.output

CMD [ "node", ".output/server/index.mjs" ]

EXPOSE 3000

##########

FROM nginx:alpine as statics

WORKDIR /app

COPY --from=builder /app/.output/public/ /usr/share/nginx/html/
