'use strict'

const NuxtService = use('App/Services/Nuxt')

class NuxtController {

  async render ({ request, response }) {
    response.implicitEnd = false
    NuxtService.nuxt.render(request.request, response.response)
  }

}

module.exports = NuxtController
