import { Module } from '@nestjs/common';
import { LogService } from './logs/log.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from './config/config.module';

@Module({
  providers: [LogService],
  imports: [UsuarioModule, ConfigModule]
})
export class CoreModule {}
