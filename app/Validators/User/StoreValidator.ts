import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Constants from 'App/Helpers/constants'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string({}, [
      rules.alpha({
        allow: ['space']
      }),
      rules.required()
    ]),
    gender: schema.enum(
      [Constants.GENDER_FEMALE, Constants.GENDER_MALE, Constants.GENDER_OTHER],
      [rules.required()]
    ),
    genderSpecification: schema.string.optional({}, [
      rules.alpha({ allow: ['space'] }),
      rules.requiredWhen('gender', '=', Constants.GENDER_OTHER)
    ]),
    birthDate: schema.date({}),
    living_city_id: schema.number([rules.exists({ table: 'cities', column: 'id' })])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {
    'gender.enum':
      'Use one of the following values: ["GENDER_FEMALE", "GENDER_MALE", "GENDER_OTHER"]',
    'genderSpecification.required': 'Required when passing property `gender` === "GENDER_OTHER"'
  }
}
