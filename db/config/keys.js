const config = require('./config.json')

module.exports = {
  database: {
    connectionLimit: 10,
    host: process.env.DATABASE_HOST || config.development.host,
    user: process.env.DATABASE_USER || config.development.username,
    password: process.env.DATABASE_PASSWORD || config.development.password,
    database: process.env.DATABASE_NAME || config.development.database
  }
}
