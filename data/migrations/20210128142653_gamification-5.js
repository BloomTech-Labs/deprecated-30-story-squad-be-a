exports.up = function (knex) {
  return knex.schema.table('Faceoffs', (t) => {
    t.integer('TotalVotes').defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.table('Faceoffs', (t) => {
    t.dropColumn('TotalVotes');
  });
};
