import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'database/data-source-options';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      dataSourceOptions
    )
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('DB_HOST'),
    //     port: configService.get('DB_PORT'),
    //     username: configService.get<string>('DB_USERNAME'),
    //     password: configService.get<string>('DB_PASSWORD'),
    //     database: configService.get<string>('DB_DATABASE'),
    //     entities: [__dirname + '../../../../**/*.entity{.ts,.js}'],
    //     keepConnectionAlive: true,
    //     synchronize: true,
    //     logging: true
    //   })
    // })
  ]
})
export class DatabaseModule {}
