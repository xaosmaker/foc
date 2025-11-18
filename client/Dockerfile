





FROM node:24-alpine3.22 AS base

FROM base AS build
RUN npm install -g pnpm
WORKDIR /build

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm i

COPY . .
RUN pnpm build

FROM base AS run
ENV NODE_ENV=production
RUN npm install -g pnpm
WORKDIR /client
#
#
COPY --from=build /build/package.json /build/pnpm-lock.yaml ./
RUN pnpm i --prod 

COPY --from=build /build/.next /client/.next
COPY --from=build /build/public /client/public
COPY --from=build /build/next.config.ts /client/.
#
CMD ["pnpm","start"]
