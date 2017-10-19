'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('first_name').notNullable()
      table.string('last_name').nullable()
      table.string('email_address', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
