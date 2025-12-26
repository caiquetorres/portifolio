FROM node:20-slim AS base

RUN corepack enable
RUN corepack prepare pnpm@9.1.1 --activate

WORKDIR /app

FROM base AS build

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM base AS prod-deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

FROM node:20-slim AS production

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY package.json ./

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "build"]
