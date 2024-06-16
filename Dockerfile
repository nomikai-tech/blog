FROM node:18-alpine

COPY . /app

# Set the working directory
WORKDIR /app

ENV NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT: https://gql.hashnode.com
ENV NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST: nomikai.hashnode.dev
ENV NEXT_PUBLIC_BASE_URL: /blog
ENV NEXT_PUBLIC_MODE: production

# Install pnpm
RUN npm install -g pnpm

# By default, use the enterprise theme
ARG THEME=enterprise

WORKDIR /app/packages/blog-starter-kit/themes/${THEME}
RUN cp .env.example .env.local
RUN pnpm install --frozen-lockfile

RUN pnpm build

# Expose the port Next.js runs on
EXPOSE 3000

# Run the Next.js start script
CMD ["pnpm", "start"]
