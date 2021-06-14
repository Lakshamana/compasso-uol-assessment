import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/User/StoreValidator'
import UpdateValidator from 'App/Validators/User/UpdateValidator'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { name } = request.only(['name'])

      const data = await User.query().where(query => {
        if (name) {
          query.where('name', 'like', `%${name}%`)
        }
      })

      return response.ok({ data })
    } catch (error) {
      return response.internalServerError()
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

      await User.create(payload)

      return response.created()
    } catch (e) {
      return response.internalServerError()
    }
  }

  public async update({ request, response }: HttpContextContract) {
    await request.validate(UpdateValidator)

    const id = request.param('id')
    const { name } = request.only(['name'])

    const user = await User.findOrFail(id)
    user.name = name

    try {
      await user.save()
    } catch (e) {
      return response.internalServerError()
    }

    return response.ok(user)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param('id')

    const user = await User.findOrFail(id)

    try {
      await user.delete()

      return response.noContent()
    } catch (e) {
      return response.internalServerError()
    }
  }
}
