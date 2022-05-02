exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.integer('news_id').references('news.id')
    table.integer('author').references('users.id')
    table.datetime('created_on')
    table.string('content')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('comments')
}
