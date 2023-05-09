import { Transform } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class PersonaDto {
  @IsNotEmpty()
  @IsString()
  tipoDocumento: string
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  nroDocumento: string
  @IsNotEmpty()
  @IsString()
  nombres: string
  @IsString()
  primerApellido: string
  segundoApellido?: string
  @IsString()
  fechaNacimiento: string
}