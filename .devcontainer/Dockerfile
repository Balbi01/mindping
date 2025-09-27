# Development container for mindping monorepo
FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

# Install Node.js, npm, and pnpm
RUN apt-get update \
    && apt-get install -y curl postgresql-client \
    && curl -fsSL https://1/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g pnpm

# Install Docker CLI
RUN apt-get install -y docker.io

# Set working directory
WORKDIR /workspace

# [Optional] Install any global npm packages here
# RUN npm install -g <package>
