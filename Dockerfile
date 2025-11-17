# Etapa 1: Dependencias
FROM node:18-alpine3.21 AS deps
WORKDIR /app

# Fix del CVE crítico: actualizar repos de Alpine y paquetes base
RUN apk update && apk upgrade --no-cache

COPY package*.json ./
RUN npm ci

# Etapa 2: Builder
FROM node:18-alpine3.21 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Etapa 3: Runtime con nginx
FROM nginx:stable-alpine3.21

# Fix del CVE crítico en Alpine
RUN apk update && apk upgrade --no-cache

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 3991
ENTRYPOINT ["nginx", "-g", "daemon off;"]
