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

router.get('/:id', (req, res) => {
  var blogId = req.params.id
  knex('blogs').where('id', blogId)
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

router.get('/blogpluscomments/:id', (req, res) => {
  var allId = req.params.id
  var blogHolder = []
  knex('blogs').where('id', allId)
    .then(result => {
      blogHolder = result
      knex('comments').where('blog_id', allId)
        .then(commentsResult => {
          blogHolder.push(commentsResult)
          Promise.all(blogHolder)
          res.send(blogHolder)
        })
        .catch(commentsError => {
          res.send(commentsError)
        })
    })
    .catch(error => {
      res.send(error)
    })
})

// router.get('/allblogsallcomments', (req, res) => {
//   var allBlogHolder = []
//   var allCommentHolder = []
//   knex('blogs')
//     .then(result => {
//       allBlogHolder = result
//       for (var i = 0; i < result.length; i++) {
//         allCommentHolder.push(knex('comments').where('blog_id', result[i].id))
//       }
//       Promise.all([Promise.all(allCommentHolder), allBlogHolder])
//         .then(everyThing => {
//           res.send(everyThing)
//         })
//         .catch(error2 => {
//           res.send(error2)
//         })
//     })
//     .catch(error => {
//       res.send(error)
//     })
// })

router.post('/new', (req, res) =>{
  var newAuthor = req.body.author
  var newBody = req.body.body
  var newURL = req.body.image_url
  var newTitle = req.body.title
  knex('blogs').insert({author:newAuthor, body:newBody, title:newTitle, image_url:newURL, votes:0}).returning(['id', 'author', 'body', 'title', 'votes', 'image_url', 'date'])
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

router.patch('/update/:id', (req, res) => {
  var changeId = req.params.id
  var changeBody = req.body.body
  var changeTitle = req.body.title
  var changeURL = req.body.image_url
  knex('blogs').where('id', changeId).update({title:changeTitle, body:changeBody, image_url:changeURL})
    .then(result => {
      res.send(200)
    })
    .catch(error => {
      res.send(error)
    })
})

router.patch('/votes/:id', (req, res) => {
  var votesId = req.params.id
  var changeVotes = req.body.votes
  knex('blogs').where('id', votesId).update({votes:changeVotes})
    .then(result => {
      res.send(200)
    })
    .catch(error => {
      res.send(error)
    })
})

router.delete('/:id', (req, res) => {
  var dId = req.params.id
  knex('blogs').where('id', dId).del()
    .then(result => {
      res.send(200)
    })
    .catch(error => {
      res.send(error)
    })
})

module.exports = router
