FROM nginx:alpine
LABEL authors="jhonyretro"

COPY . /usr/share/nginx/html

EXPOSE 80