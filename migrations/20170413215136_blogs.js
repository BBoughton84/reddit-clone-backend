
exports.up = function(knex) {
    return knex.schema.createTable('blogs', b => {
      b.increments('id')
      b.string('title')
      b.string('body')
      b.string('author')
      b.integer('votes')
      b.dateTime('date')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('blogs')
}
