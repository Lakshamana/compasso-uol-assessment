import { DateTime } from 'luxon'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Constants from 'App/Helpers/constants'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    User.createMany([
      {
        name: 'John Doe',
        gender: Constants.GENDER_MALE,
        birthDate: DateTime.local(1970, 1, 1)
      },
      {
        name: 'Melanie Wallace',
        gender: Constants.GENDER_OTHER,
        genderSpecification: 'Non-binary, etc.',
        birthDate: DateTime.local(1970, 1, 2)
      }
    ])
  }
}
