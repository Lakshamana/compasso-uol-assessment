import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import City from 'App/Models/City'
import StoreValidator from 'App/Validators/User/StoreValidator'
import Constants from 'App/Helpers/constants'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { name } = request.only(['name'])
      const page = request.input('page', 1)

      const data = await User.query()
        .where(query => {
          if (name) {
            query.where('name', 'like', `%${name}%`)
          }
        })
        .paginate(page, Constants.DEFAULT_PER_PAGE)

      return response.ok(data)
    } catch (error) {
      console.log(error)
      return response.badRequest()
    }
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(StoreValidator)

    try {
      const payload = request.only([
        'name',
        'gender',
        'genderSpecification',
        'birthDate',
        'living_city_id'
      ])

      const user = await User.create(payload)
      const city = await City.findOrFail(payload.living_city_id)

      await user.related('livingCity').associate(city)

      return response.created()
    } catch (e) {
      return response.badRequest(e)
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
