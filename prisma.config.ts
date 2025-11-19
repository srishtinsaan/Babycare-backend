import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma", //Start reading schema from here and automatically include any other .prisma files inside the schema directory.
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
