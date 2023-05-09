import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigrations1683667272565 implements MigrationInterface {
    name = 'InitMigrations1683667272565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios"."usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "usuario" character varying(50) NOT NULL, "contrasena" character varying(255) NOT NULL, "ciudadania_digital" boolean NOT NULL DEFAULT false, "correo_electronico" character varying, "id_persona" uuid NOT NULL, CONSTRAINT "UQ_9921cd8ed63a072b8f93ead80f0" UNIQUE ("usuario"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios"."persona" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nombres" character varying(100) NOT NULL, "primer_apellido" character varying(100) NOT NULL, "nro_documento" character varying(50) NOT NULL, CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuarios"."usuario" ADD CONSTRAINT "FK_1fbc7de91b8e96937ed27739e8f" FOREIGN KEY ("id_persona") REFERENCES "usuarios"."persona"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios"."usuario" DROP CONSTRAINT "FK_1fbc7de91b8e96937ed27739e8f"`);
        await queryRunner.query(`DROP TABLE "usuarios"."persona"`);
        await queryRunner.query(`DROP TABLE "usuarios"."usuario"`);
    }

}
