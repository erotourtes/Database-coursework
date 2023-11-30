import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter
  implements ExceptionFilter<PrismaClientKnownRequestError>
{
  private readonly prismaClientKnownRequestErrorCodes = {
    P2002: HttpStatus.CONFLICT,
    P2025: HttpStatus.FORBIDDEN,
    P2003: HttpStatus.BAD_REQUEST,
  };

  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.log('PrismaExceptionFilter', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      this.prismaClientKnownRequestErrorCodes[exception.code] ||
      HttpStatus.INTERNAL_SERVER_ERROR;
    response.status(status).json({
      statusCode: status,
      message: "Can't process your request",
      error: exception.code,
    });
  }
}
