FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Build
FROM deps AS build
COPY . .
RUN npm run build

# Production dependencies only
FROM base AS prod-deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Production
FROM base AS production
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/dist /app/dist
COPY --from=build /app/server /app/server
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

EXPOSE 3000

CMD ["node", "server/entry.node-server"]
