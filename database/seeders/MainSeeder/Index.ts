import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'
import User from 'App/Models/User'
import City from 'App/Models/City'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../City'))
    await this.runSeeder(await import('../User'))
  }
}
