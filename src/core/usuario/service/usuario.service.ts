import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from '../repository/usuario.repository';
import { CreacionUsuarioDto } from '../dto/creacion-usuario.dto';

@Injectable()
export class UsuarioService {

  constructor(
    private usuarioRepository: UsuarioRepository
  ) {}

  async crear(usuarioDto: CreacionUsuarioDto) {
    const result = await this.usuarioRepository.crear(usuarioDto)
    return { id: result.id }
  }
}
