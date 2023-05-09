import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigrations1683667143621 implements MigrationInterface {
    name = 'InitMigrations1683667143621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios"."persona" ADD "nro_documento" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios"."persona" DROP COLUMN "nro_documento"`);
    }

}
