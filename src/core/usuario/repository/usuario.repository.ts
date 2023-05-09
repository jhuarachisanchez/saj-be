import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreacionUsuarioDto } from '../dto/creacion-usuario.dto';
import { Usuario } from '../entity/usuario.entity';

@Injectable()
export class UsuarioRepository {
  
  constructor(
    private dataSource: DataSource
  ) {}

  async crear(usuarioDto: CreacionUsuarioDto) {
    console.log('Create usuarioDto', usuarioDto)
    const usuarioRepository = this.dataSource.getRepository(Usuario);
    const usuario: Usuario = await usuarioRepository.create({
      persona: {
        nombres: usuarioDto?.persona?.nombres,
        primerApellido: usuarioDto?.persona?.primerApellido
      },
      usuario: usuarioDto?.usuario,
      correoElectronico: usuarioDto?.correoElectronico,
      contrasena: usuarioDto?.contrasena,
      ciudadaniaDigital: usuarioDto?.ciudadaniaDigital ?? false
    })

    return await usuarioRepository.save(usuario)
  }
}