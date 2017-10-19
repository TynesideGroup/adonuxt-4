'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/**
 * EXAMPLE:
 *
 * const Factory = use('Factory')
 * const Hash = use('Hash')
 *
 * Factory.blueprint('App/Models/User', async (faker) => ({
 *  username: faker.username(),
 *  email: faker.email(),
 *  password: await Hash.make(faker.password())
 * }))
 *
 */
