const environment = process.env.NODE || 'development'
const config = require('..knexfile.js')['environment']
const knex = require('knex')(config)

module.exports = knex
