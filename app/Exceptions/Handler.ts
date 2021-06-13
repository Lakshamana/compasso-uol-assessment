/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const mapErrToCode = {
  E_VALIDATION_FAILURE: 422,
  E_ROUTE_NOT_FOUND: 404,
  E_ROW_NOT_FOUND: 404
}

export default class ExceptionHandler extends HttpExceptionHandler {
  public async handle(error: any, ctx: HttpContextContract) {
    /**
     * Self handle the validation exception
     */
    const status = mapErrToCode[error.code]
    if (status) {
      return ctx.response.status(status).send(error.messages)
    }

    /**
     * Forward rest of the exceptions to the parent class
     */
    return super.handle(error, ctx)
  }

  constructor() {
    super(Logger)
  }
}
