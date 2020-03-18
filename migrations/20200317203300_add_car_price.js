
exports.up = function(knex) {
  
return knex.schema.table('cars', tbl => {
    tbl.string("prices", 5)
})

};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('prices')
  })
};
