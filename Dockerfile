# docker run --rm -p "8081:80" registry.gitlab.com/eritikass/ci-test:latest
FROM nginx:alpine

COPY dist /usr/share/nginx/html
