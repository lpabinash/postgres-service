const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://bjhpyypa:YoyjpB6m6Vga4JJJx1nG4ve1vute7ga0@manny.db.elephantsql.com/bjhpyypa");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;

