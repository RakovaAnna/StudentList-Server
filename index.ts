import express, { Request, Response } from 'express';
import { StudentController } from './controllers/studentController';
import { AppDataSource } from './data-source';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { ProgressController } from './controllers/progressController';
import { swaggerOptions } from './openapi';
import { corsOptions } from './cors';

class Server {
  private app: express.Application;
  private studentController: StudentController;
  private progressController: ProgressController;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3001);
    this.app.use(express.json());
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    this.app.use(cors(corsOptions));
  }

  public routes() {
    AppDataSource
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!")
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err)
      })

    this.studentController = new StudentController();
    this.progressController = new ProgressController();
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello world!");
    });
    this.app.use(`/api/students`, this.studentController.router);
    this.app.use(`/api/progress`, this.progressController.router);

  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server ${this.app.get('port')}`);
    })
  }
}


const server = new Server();
server.start();
