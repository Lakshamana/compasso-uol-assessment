import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Constants from 'App/Helpers/constants'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await User.createMany([
      {
        name: 'John Doe',
        gender: Constants.GENDER_MALE,
        birthDate: '1970-01-01',
        living_city_id: 1
      },
      {
        name: 'Melanie Wallace',
        gender: Constants.GENDER_OTHER,
        genderSpecification: 'Non-binary, etc.',
        birthDate: '1970-01-02',
        living_city_id: 2
      }
    ])
  }
}
