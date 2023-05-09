import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Persona } from './persona.entity';

@Entity({ schema: "usuarios"})
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column({ length: 50, type: 'varchar', unique: true })
  usuario: string
  @Column({ length: 255, type: 'varchar' })
  contrasena: string
  @Column({ name: 'ciudadania_digital', type: 'boolean', default: false })
  ciudadaniaDigital: boolean
  @Column({ name: 'correo_electronico', type: 'varchar', nullable: true })
  correoElectronico: string
  @ManyToOne(() => Persona, (persona) => persona.usuarios, {
    nullable: false,
    cascade: true
  })
  @JoinColumn({
    name: 'id_persona',
    referencedColumnName: 'id'
  })
  persona: Persona
}