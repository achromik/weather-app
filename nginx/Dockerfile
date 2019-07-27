FROM nginx:latest

WORKDIR /

ARG nginx_file

RUN rm /etc/nginx/conf.d/*

COPY ${nginx_file} /etc/nginx/conf.d/
