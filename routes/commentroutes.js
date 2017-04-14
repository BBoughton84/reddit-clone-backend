const router = require('express').Router()
const knex =  require('../db/knex.js')

router.get('/:id', (req, res) => {
  var getComm = req.params.id
  knex('comments').where('id', getComm)
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

router.get('/allperblog/:id', (req, res) => {
  var blogId = req.params.id
  knex('comments').where('blog_id', blogId)
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

router.post('/new', (req, res) => {
  var newAuthor = req.body.author
  var newComment = req.body.comment
  var blogId = req.body.blog_id
  knex('comments').insert({author:newAuthor, comment:newComment, blog_id:blogId}).returning(['id', 'author', 'blog_id', 'comment'])
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

router.patch('/update/:id', (req, res) => {
  var pId = req.params.id
  var changeComment = req.body.comment
  var changeAuthor = req.body.author
  knex('comments').where('id', pId).update({comment:changeComment, author:changeAuthor})
    .then(result => {
      res.send(200)
    })
    .catch(error => {
      res.send(error)
    })
})

router.delete('/:id', (req, res) => {
  var dId = req.params.id
  knex('comments').where('id', dId).del()
    .then(result => {
      res.send(200)
    })
    .catch(error => {
      res.send(error)
    })
})

module.exports = router
