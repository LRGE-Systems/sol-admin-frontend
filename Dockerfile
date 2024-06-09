FROM node:10.20.1-stretch
WORKDIR /app
COPY entrypoint.sh /app/entrypoint.sh
COPY . /app/
RUN npm install

ENTRYPOINT '/app/entrypoint.sh'