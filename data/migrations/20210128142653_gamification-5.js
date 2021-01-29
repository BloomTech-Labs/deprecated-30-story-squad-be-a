
exports.up = function (knex) {
    return knex.schema
      .table('Faceoffs', (t) => {
        t.integer('TotalVotes');
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .table('Faceoffs', (t) => {
        t.dropColumn('TotalVotes');
      })
  };