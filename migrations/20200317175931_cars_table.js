
//what changes will be applied to the database
exports.up = function(knex) {
  //create cartable here


  //always return
  return knex.schema.createTable('cars', tbl => {
      //add primary key, name id, integer, autoincremect
      tbl.increments();

      tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index();//constrant

  })
};



//this will undo the changes
exports.down = function(knex) {
  //remove carTables here {drop}

  //return
return knex.schema.dropTableIfExists("cars")

};
