import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { CoreModule } from './core/core.module'
import { LoggerModule } from 'nestjs-pino'
import { LogService } from './core/logs/log.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    LoggerModule.forRoot({
      pinoHttp: [ LogService.getPinoHttpConfig(), LogService.getStream() ]
    }),
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
