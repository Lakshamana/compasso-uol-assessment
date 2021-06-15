import BaseSchema from '@ioc:Adonis/Lucid/Schema'
export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id')

      table.string('name').notNullable()
      table.enum('gender', ['GENDER_MALE', 'GENDER_FEMALE', 'GENDER_OTHER'])
      table.string('gender_specification')
      table.date('birth_date').notNullable()

      table.integer('living_city_id').unsigned().notNullable().references('id').inTable('cities')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
