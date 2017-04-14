
exports.up = function(knex) {
    return knex.schema.createTable('comments', c => {
      c.increments('id')
      c.integer('blog_id').references('id').inTable('blogs').onDelete('CASCADE')
      c.string('comment')
      c.string('author')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments')
}
