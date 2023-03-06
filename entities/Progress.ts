import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * @swagger
 * components:
 *   schemas:
 *     Progress:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID оценки успеваемости.
 *           example: 0
 *         value:
 *           type: string
 *           description: Значение оценки успеваемости.
 *           example: Отлично
 */

@Entity()
export class Progress {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

}
