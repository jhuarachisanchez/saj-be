import { UuidUtil } from 'src/common/lib/uuid.util'
import { Persona } from 'src/core/usuario/entity/persona.entity'
import { Usuario } from 'src/core/usuario/entity/usuario.entity'
import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUsuario1683662502453 implements MigrationInterface {

  public async up (queryRunner: QueryRunner): Promise<void> {
    const items = [
      {
        usuario: 'admin',
        persona: UuidUtil.convertTextToUuid('9270815'),
        contrasena: 'Developer',//TODO encrypt password
        correoElectronico: 'admin-9270815@yopmail.com'
      }
    ]
    const usuarios = items.map((item) => {
      const p = new Persona()
      p.id = item.persona
      const u = new Usuario()
      u.id = UuidUtil.convertTextToUuid(item.usuario)
      u.usuario = item.usuario
      u.correoElectronico = item.correoElectronico
      u.contrasena = item.contrasena,
      u.persona = p
      return u
    })
    await queryRunner.manager.save(usuarios)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }

}
