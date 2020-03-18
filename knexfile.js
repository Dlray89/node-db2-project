// Update with your config settings.

module.exports = {

  development: {
    client:'sqlite3', //database drive here
    connection:{
        filename:  "./data/cars.db"  //filename here
    },
    useNullAsDefault: true
},

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.CAR_DB || 'my_db',
      user: process.env.CAR_USER ||  'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
