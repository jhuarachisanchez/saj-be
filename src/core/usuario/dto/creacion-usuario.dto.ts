import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { PersonaDto } from './persona.dto'
import { Type } from 'class-transformer'


export class CreacionUsuarioDto {
  @IsString()
  usuario: string
  @IsString()
  contrasena: string
  @IsNotEmpty()
  @IsEmail()
  correoElectronico: string
  @ValidateNested()
  @Type(() => PersonaDto)
  persona: PersonaDto
  ciudadaniaDigital?: boolean = false
  @IsNotEmpty()
  roles: Array<string>
  usuarioCreacion?: string
}