import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

/**
 * @swagger
 * components:
 *  schemas:
 *      Student:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: ID студента
 *                  example: 0
 *              fio:
 *                  type: string
 *                  description: ФИО студента
 *                  example: Иванов Иван Иванович
 *              date_of_birth:
 *                  type: date
 *                  description: Дата рождения студента
 *                  example: 2000-01-13 00:00:00
 *              progress:
 *                  type: integer
 *                  description: Успеваемость
 *                  example: 1
 */

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fio: string;

    @Column()
    date_of_birth: Date;

    @Column()
    progress: number;

}
