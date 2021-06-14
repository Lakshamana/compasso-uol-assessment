import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import City from 'App/Models/City'

export default class CitySeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await City.createMany([
      {
        name: 'New York City',
        state: 'NY'
      },
      {
        name: 'Palo Alto',
        state: 'CA'
      }
    ])
  }
}
