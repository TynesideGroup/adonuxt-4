'use strict'

const NuxtService = use('App/Services/Nuxt')

class NuxtController {

  render ({ request, response }) {
    response.implicitEnd = false
    NuxtService.nuxt.render(request.request, response.response)
  }

}

module.exports = NuxtController
