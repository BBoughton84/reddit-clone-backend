
exports.up = function(knex) {
    return knex.schema.createTable('blogs', b => {
      b.increments('id')
      b.string('title')
      b.text('body')
      b.string('author')
      b.integer('votes')
      b.string('image_url')
      b.timestamp('date').defaultTo(knex.fn.now());
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('blogs')
}
