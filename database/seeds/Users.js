'use strict'

const User = use('App/Models/User')

const usersSeedData = require('../seed-data/Users')

class UsersSeeder {

  async run () {
    for (let user of usersSeedData) {
      await User.create(user)
    }
    console.log('Seeded Users')
  }

}

module.exports = UsersSeeder
