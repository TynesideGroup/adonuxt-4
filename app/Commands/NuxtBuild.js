'use strict'

const { Command } = require('@adonisjs/ace')
const { Nuxt, Builder } = require('nuxt')

const Config = use('Config')

class NuxtBuild extends Command {

  static get signature () {
    return 'nuxt:build'
  }

  static get description () {
    return 'Build app for production.'
  }

  handle (args, options) {
    let config = Config.get('nuxt')
    config.dev = false
    this.nuxt = new Nuxt(config)
    new Builder(this.nuxt).build()
  }

}

module.exports = NuxtBuild
