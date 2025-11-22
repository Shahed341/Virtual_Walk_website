FROM mysql:8.0
ENV MYSQL_ROOT_PASSWORD=example
ENV MYSQL_DATABASE=companydb
COPY init/ /docker-entrypoint-initdb.d/
