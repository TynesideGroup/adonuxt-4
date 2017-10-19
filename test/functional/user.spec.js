'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('DatabaseTransactions')
trait('Test/ApiClient')

test ('get list of users', async ({ client }) => {
  await User.create({
    first_name: 'Liam',
    last_name: 'Potter',
    email_address: 'test@test.com',
    password: 'Sup3rStr0ngPa55w0rd!'
  })

  const response = await client.get('/users').end()

  response.assetStatus(200)
  response.assetJSONSubset([{
    first_name: 'Liam',
    last_name: 'Potter',
    email_address: 'test@test.com'
  }])
})
