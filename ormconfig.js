module.exports = {
  type: "sqlite",
  database: "src/database/database.sqlite",
  cli: {
    migrationsDir: "src/databasa/migrations",
  },
};
