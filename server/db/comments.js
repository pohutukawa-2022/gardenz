const connection = require('./connection')

module.exports = {
  getAllComments,
  getCommentsByNewsId,
  newsComment,
  deleteCommentById,
  deleteAllCommentsByNewsId,
  getCommentById,
  updateCommentById,
}

function getAllComments(db = connection) {
  return db('comments').select()
}

function getCommentsByNewsId(id, db = connection) {
  return db('comments').where('news_id', id).select()
}

function deleteAllCommentsByNewsId(id, db = connection) {
  return db('comments').where('news_id', id).del()
}

function getCommentById(id, db = connection) {
  return db('comments').where('id', id).select().first()
}

function newsComment(comment, db = connection) {
  const { newsId, author, createdOn, content } = comment
  return db('comments').insert({
    news_id: newsId,
    author,
    created_on: createdOn,
    content,
  })
}

function deleteCommentById(id, db = connection) {
  return db('comments').where('id', id).del()
}

function updateCommentById(comment, db = connection) {
  const { id, newsId, author, createdOn, content } = comment
  return db('comments')
    .where('id', id)
    .update({
      news_id: newsId,
      author,
      created_on: createdOn,
      content,
    })
    .then(() => getCommentById(id, db))
}
