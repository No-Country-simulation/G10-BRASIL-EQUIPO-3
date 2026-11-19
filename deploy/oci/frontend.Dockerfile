FROM node:22-alpine AS build

WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ ./
ARG VITE_USE_MOCK=false
ARG VITE_API_URL=/api/v1
ARG VITE_AUTH_ENABLED=false
ARG VITE_MAX_UPLOAD_MB=10
ENV VITE_USE_MOCK=${VITE_USE_MOCK} \
    VITE_API_URL=${VITE_API_URL} \
    VITE_AUTH_ENABLED=${VITE_AUTH_ENABLED} \
    VITE_MAX_UPLOAD_MB=${VITE_MAX_UPLOAD_MB}
RUN npm run build

FROM nginx:1.28-alpine
COPY deploy/oci/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
