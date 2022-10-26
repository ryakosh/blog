FROM httpd:2-alpine

COPY ./public/ /usr/local/apache2/htdocs/
