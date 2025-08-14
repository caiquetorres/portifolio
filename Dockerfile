FROM node:20-slim AS base

RUN corepack enable
RUN corepack prepare pnpm@9.1.1 --activate

COPY . /app
WORKDIR /app

FROM base AS build
RUN pnpm install
RUN pnpm build

WORKDIR /app

CMD [ "node", "build" ]

EXPOSE 3000
