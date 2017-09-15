'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.httpServer(() => {
  use('App/Services/Nuxt')
})
