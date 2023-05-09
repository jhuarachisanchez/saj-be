import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service'
import { CreacionUsuarioDto } from '../dto/creacion-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  
  constructor(
    private usuarioService: UsuarioService
  ) {
  }

  @Post()
  async crear(@Body() usuarioDto: CreacionUsuarioDto) {
    console.log('this is the request user', usuarioDto)
    const result = await this.usuarioService.crear(usuarioDto)
    return {
      finalizado: true,
      mensaje: 'Usuario creado correctamente',
      datos: result
    }
  }
}
