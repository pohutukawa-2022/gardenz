const log = require('../../logger')

exports.seed = (knex) => {
  // Reset the sequences in postgres
  if (knex.client.config.client === 'postgresql') {
    return knex('pg_class')
      .where('relkind', 'S')
      .not.where('relname', 'LIKE', '%migration%')
      .select('relname')
      .debug()
      .then((sequences) =>
        sequences.map((sequenceObj) => {
          const sequence = sequenceObj.relname
          const table = sequence.replace('_id_seq', '')
          return knex.raw(
            `select setval('${sequence}', (select max(id) from ${table}) + 1)`
          )
        })
      )
      .then((result) => Promise.all(result))
      .then((results) => {
        log(results)
        return null
      })
  }
}
