import { Router, Request, Response } from 'express';
import { ProgressService } from '../services/progressService';

export class ProgressController {
  public router: Router;
  private progressService: ProgressService;

  constructor() {
    this.router = Router();
    this.progressService = new ProgressService();
    this.routes();
  }

  public getAll = async (req: Request, res: Response) => {
    const progress = await this.progressService.getAll();
    await res.send(progress);
  }

  public index = async (req: Request, res: Response) => {
    const id = req['params']['id'];
    const progress = await this.progressService.index(Number(id));
    await res.send(progress);
  }

  /**
   * @swagger
   *  tags:
   *    name: Progress
   *    description: Оценки
   */
  public routes() {
    /**
     * @swagger
     * /progress:
     *   get:
     *     summary: Список оценок
     *     tags: [Progress]
     *     responses:
     *      200:
     *        description: Список оценок
     *        content:
     *          application/json:
     *            schema:
     *              type: array
     *              items:
     *                 $ref: '#/components/schemas/Progress'
     */
    this.router.get('/', this.getAll);
    /**
     * @swagger
     * /progress/{id}:
     *  get:
     *    summary: Получение оценки по ID
     *    tags: [Progress]
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: ID оценки
     *        schema:
     *            type: integer
     *    responses:
     *      200:
     *        description: Оценка
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Progress'
     *      400:
     *        description: Оценка не найдена
     */
    this.router.get('/:id', this.index);
  }
}
