
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/xxxxxx'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
