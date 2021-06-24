const dotenv = require("dotenv");

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.production",
});

module.exports = {
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: ["src/database/migrations/*.ts"],
  entities: ["src/entities/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};
