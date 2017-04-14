
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/reddit'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
