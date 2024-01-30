module.exports = {
  USER: 'postgres',
  HOST: 'localhost',
  DB: 'testdb',
  PASSWORD: 'root',
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


// USER: 'sgpostgres',
// HOST: 'postgres://bjhpyypa:YoyjpB6m6Vga4JJJx1nG4ve1vute7ga0@manny.db.elephantsql.com/bjhpyypa',
// DB: 'postgres',
// PASSWORD: 'VT3ajjT,6c8zzi94',
// PORT: 5432,
// dialect: "postgres",
