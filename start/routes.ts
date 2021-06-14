/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Constants from 'App/Helpers/constants'

Route.resource('/users', 'UsersController').apiOnly()
Route.resource('/cities', 'CitiesController').apiOnly()
Route.get('/available-states', ({ response }: HttpContextContract) => {
  return response.ok({ states: Constants.availableStates })
})
