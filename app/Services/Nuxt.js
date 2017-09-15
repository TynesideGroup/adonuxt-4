'use strict'

const Env = use('Env')
const Config = use('Config')

const { Nuxt, Builder } = require('nuxt')

class NuxtService {

  constructor () {
    let config = Config.get('nuxt')
    config.dev = Env.get('NODE_ENV') === 'development'
    this.nuxt = new Nuxt(config)

    if (config.dev) {
      this.builder = new Builder(this.nuxt).build()
    }
  }

}

module.exports = new NuxtService()
