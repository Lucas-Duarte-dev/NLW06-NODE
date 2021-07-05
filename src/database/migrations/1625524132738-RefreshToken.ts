import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RefreshToken1625524132738 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "refresh_token",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "expires_in",
            type: "int",
          },
          {
            name: "user_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKRefreshTokenUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("refresh_token");
  }
}
