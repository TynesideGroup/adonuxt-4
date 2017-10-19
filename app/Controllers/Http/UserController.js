'use strict'

const User = use('App/Models/User')

class UserController {

  async index () {
    return await User.all()
  }

  async show ({ params }) {
    return await User.find(params.id)
  }

  async store ({ request }) {
    return await User.create(request.post())
  }

  async update ({ params, request }) {
    return await User
      .query()
      .where({ id: params.id })
      .update(request.post())
  }

  async destroy ({ params }) {
    return await User
      .query()
      .where({ id: params.id })
      .delete()
  }

}

module.exports = UserController
