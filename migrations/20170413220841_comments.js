
exports.up = function(knex) {
    return knex.schema.createTable('comments', c => {
      c.increments('id')
      c.integer('blogs_id').references('id').inTable('blogs')
      c.string('comments')
      c.string('author')
    })
}

exports.down = function(knex) {
    return knex.schema.
}
