# Development container for mindping monorepo
# FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

# RUN apt-get update && apt-get install -y \
#     curl \
#     postgresql-client \
#     docker.io \
#     && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
#     && apt-get install -y nodejs \
#     # Limpieza de la caché de apt
#     && rm -rf /var/lib/apt/lists/*

# # Instala pnpm y otros paquetes globales
# RUN npm install -g pnpm

# WORKDIR /workspace

# Dockerfile
FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

# Instala dependencias del sistema operativo que no tengan una "feature"
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*