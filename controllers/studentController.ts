import {Router, Request, Response} from 'express';
import { StudentService } from '../services/studentService';
import { Student } from '../entities/Student';

export class StudentController {
  public router: Router;
  private studentService: StudentService;

  constructor() {
    this.router = Router();
    this.studentService = new StudentService();
    this.routes();
  }

  public getAll = async (req: Request, res: Response) => {
    const students = await this.studentService.getAll();
    await res.send(students);
  }

  public index = async (req: Request, res: Response) => {
    const id = req['params']['id'];
    const students = await this.studentService.index(Number(id));
    await res.send(students);
  }

  public create = async (req: Request, res: Response) => {
    const student = req['body'] as Student;
    const newStudent = await this.studentService.create(student);
    res.send(newStudent);
  }

  public update = async (req: Request, res: Response) => {
    const student = req['body'] as Student;
    const id =  req['params']['id'];

    res.send(this.studentService.update(student, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.studentService.delete(Number(id)));
  }

  /**
   * @swagger
   *  tags:
   *    name: Students
   *    description: Студенты
   */
  public routes() {
    /**
     * @swagger
     * /students:
     *   get:
     *     summary: Получение списка студентов
     *     tags: [Students]
     *     responses:
     *      200:
     *         description: Список студентов
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Student'
     */
    this.router.get('/', this.getAll);
    /**
     * @swagger
     * /students/:id:
     *  get:
     *    summary: Получение информации об одном студенте
     *    tags: [Students]
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: ID студента.
     *        schema:
     *            type: integer
     *    responses:
     *      200:
     *        description: Успешный запрос
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Student'
     *      400:
     *        description: Студент не найден
     */
    this.router.get('/:id', this.index);
    /**
     * @swagger
     * /students:
     *  post:
     *    summary: Создание нового студента
     *    tags: [Students]
     *    responses:
     *      200:
     *        description: Создано
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Progress'
     *      400:
     *        description: Запрос не найден
     */
    this.router.post('/', this.create);
    /**
     * @swagger
     * /students/:id:
     * put:
     *    summary: Обновление студента по ID
     *    tags: [Students]
     *    parameters:
     *      - in: path
     *        name: id
     *        description: ID студента
     *        required: true
     *        schema:
     *          type: integer
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/Student'
     *    responses:
     *      200:
     *        description: Successfully created user
     *        content:
     *          application/json:
     *            schema:
     *            $ref: '#/components/schemas/Student'
     *      404:
     *        description: Студент не найден
     *      500:
     *        description: Ошибка
     */
    this.router.put('/id', this.update);
    /**
     * @swagger
     * /students/:id:
     * delete:
     *    summary: Удаление студента по ID
     *    tags: [Students]
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: ID студента
     *        schema:
     *          type: integer
     *    responses:
     *      200:
     *        description: Успешное удаление
     *      404:
     *        description: Студент не найден
     */
    this.router.delete('/:id', this.delete);
  }
}
