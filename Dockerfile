FROM node:10.20.0-alpine3.11

COPY ./ /tmp/demo

WORKDIR /tmp/demo

ENTRYPOINT ["node"]
CMD ["app.js"]