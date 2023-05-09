import { UuidUtil } from 'src/common/lib/uuid.util'
import { Persona } from 'src/core/usuario/entity/persona.entity'
import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePersona1683660633814 implements MigrationInterface {

  public async up (queryRunner: QueryRunner): Promise<void> {
    const items = [
      {
        nombres: 'JOSUE',
        primerApellido: 'SERNA',
        tipoDocumento: 'CI',
        nroDocumento: '9270815',
        fechaNacimiento: "10-10-1990"
      }
    ]

    const personas = items.map((item) => {
      const p = new Persona()
      p.id = UuidUtil.convertTextToUuid(item.nroDocumento)
      p.nombres = item.nombres
      p.primerApellido = item.primerApellido
      p.nroDocumento = item.nroDocumento
      return p
    })

    await queryRunner.manager.save(personas)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }

}
