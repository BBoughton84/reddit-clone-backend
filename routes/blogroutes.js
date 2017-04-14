const router = require('express').Router()
const knex =  require('../db/knex.js')

router.get('/', (req, res) => {
  knex('blogs')
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

module.exports = router
