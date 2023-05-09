import { IsNotEmpty } from 'class-validator';
import { PersonaDto } from './persona.dto';

export class UsuarioDto {
  @IsNotEmpty()
  usuario: string
  @IsNotEmpty()
  contrasena: string
  estado?: string
  persona: PersonaDto
}