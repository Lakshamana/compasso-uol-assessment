import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import City from 'App/Models/City'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public gender: string

  @column()
  public genderSpecification: string

  @column()
  public birthDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public livingCityId: number

  // Relationships
  @belongsTo(() => City, {
    foreignKey: 'livingCityId'
  })
  public livingCity: BelongsTo<typeof City>
}