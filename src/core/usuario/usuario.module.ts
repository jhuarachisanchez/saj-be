import { Module } from '@nestjs/common'
import { UsuarioService } from './service/usuario.service'
import { UsuarioController } from './controller/usuario.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Persona } from './entity/persona.entity'
import { Usuario } from './entity/usuario.entity'
import { UsuarioRepository } from './repository/usuario.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Persona,
      Usuario
    ])
  ],
  providers: [
    UsuarioService,
    UsuarioRepository
  ],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
