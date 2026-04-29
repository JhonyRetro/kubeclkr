FROM nginx:alpine
LABEL authors="jhonyretro"

COPY default.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html

EXPOSE 80