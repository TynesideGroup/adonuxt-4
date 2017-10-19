'use strict'

const User = use('App/Models/User')

class UserController {

  async index () {
    return User.all()
  }

  async show ({ params }) {
    return User.find(params.id)
  }

}

module.exports = UserController
