FROM node:10.11 AS builder

WORKDIR /home/node
COPY --chown=node:node . .

USER node
RUN yarn install
RUN yarn build

FROM quay.io/openware/wio:8816622 AS production

RUN addgroup -S app -g 1000 && adduser -S -h /home/app -s /bin/sh -u 1000 app

COPY --from=builder --chown=app:app /home/node/build /home/app

USER app
EXPOSE 8080

CMD ["wio", "-d", "/home/node/dist"]
