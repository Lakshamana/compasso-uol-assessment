import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import City from 'App/Models/City'

export default class CitiesController {
  public async index({ request, response }: HttpContextContract) {
    const { name, state } = request.only(['name', 'state'])

    try {
      const data = await City.query().where(builder => {
        if (name) {
          builder.where('name', 'like', `%${name}%`)
        }

        if (state) {
          builder.where('state', 'like', `%${state}%`)
        }
      })

      return response.ok({ data })
    } catch (error) {
      return response.internalServerError()
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const { name, state } = request.only(['name', 'state'])
      await City.create({ name, state })

      return response.created()
    } catch (error) {
      return response.internalServerError()
    }
  }
}
