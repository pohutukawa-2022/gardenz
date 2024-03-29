const { deleteAllCommentsByNewsId } = require('./comments')
const connection = require('./connection')

module.exports = {
  getAllNews,
  getNewsByGardenId,
  getNewsById,
  addNews,
  updateNews,
  deleteNews,
}

function getAllNews(db = connection) {
  return db('news').select()
}

function getNewsByGardenId(id, db = connection) {
  return db('news')
    .join('users', 'news.author', 'users.id')
    .where('news.garden_id', id)
    .select(
      'news.id as id',
      'news.garden_id as gardenId',
      'news.author as author',
      'news.title as title',
      'news.created_on as createdOn',
      'news.content as content',
      'users.first_name as firstName',
      'users.last_name as lastName'
    )
}

function getNewsById(id, db = connection) {
  return db('news')
    .join('users', 'news.author', 'users.id')
    .where('news.id', id)
    .select(
      'news.id as id',
      'news.garden_id as gardenId',
      'news.author as author',
      'news.title as title',
      'news.created_on as createdOn',
      'news.content as content',
      'users.first_name as firstName',
      'users.last_name as lastName'
    )
    .first()
}

function addNews(newNews, db = connection) {
  const { gardenId, author, title, createdOn, content } = newNews
  return db('news').insert({
    garden_id: gardenId,
    author,
    title,
    created_on: createdOn,
    content,
  })
}

function updateNews(updatedNews, db = connection) {
  const { id, gardenId, author, title, createdOn, content } = updatedNews
  return db('News')
    .where('id', id)
    .update({
      garden_id: gardenId,
      author,
      title,
      created_on: createdOn,
      content,
    })
    .then(() => getNewsById(id, db))
}

function deleteNews(id, db = connection) {
  return db('news')
    .where('news.id', id)
    .del()
    .then(() => deleteAllCommentsByNewsId(id, db))
}
