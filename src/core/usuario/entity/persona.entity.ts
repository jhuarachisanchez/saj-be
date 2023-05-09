import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Usuario } from './usuario.entity'

// TODO, define de schemas of the application 
@Entity({ schema: 'usuarios' })
export class Persona {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 100, type: 'varchar', nullable: false })
  nombres: string

  @Column({
    name: 'primer_apellido',
    type: 'varchar',
    length: 100,
    nullable: false
  })
  primerApellido: string

  @Column({ name: 'nro_documento', length: 50 })
  nroDocumento: string
  
  @OneToMany(() => Usuario, (usuario) => usuario.persona)
  usuarios: Usuario[]
}