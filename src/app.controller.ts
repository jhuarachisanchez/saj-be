import { Controller, Get, HttpStatus, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { PinoLogger } from 'nestjs-pino'
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Controller()
export class AppController {
  static staticLogger: PinoLogger

  constructor(
    private readonly logger: PinoLogger,
    private readonly configService: ConfigService,
    private readonly appService: AppService) {
      this.logger.setContext(AppController.name)
      AppController.staticLogger = this.logger
  }

  @Get('/estado')
  checkStatus(@Res() res: Response) {
    this.logger.info('Check status')
    return res.status(HttpStatus.OK).json({
      estado: 'Servicio funcionando correctamente',
      hora: Math.floor(Date.now() / 1000)
    })
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
