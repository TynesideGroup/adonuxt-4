'use strict'

class UserController {

  static get inject () {
    return [
      'App/Models/User'
    ]
  }

  constructor (User) {
    this.User = User
  }

  async index ({ response }) {
    response.json({
      users: this.User.all()
    })
  }

  async show ({ params, response }) {
    response.json({
      user: this.User.find(params.id)
    })
  }

}

module.exports = UserController
