FROM node:14 as build

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

# Serve using a lightweight static file server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80