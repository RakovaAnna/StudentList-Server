import { AppDataSource } from '../data-source';
import { Progress } from '../entities/Progress';

export class ProgressService {
  private progressRepository;

  constructor() {
    this.progressRepository = AppDataSource.getRepository(Progress);
  }

  public getAll = async () => {
    return await this.progressRepository.find();
  }

  public index = async (id: number) => {
    return await this.progressRepository.findOne({ where: {id: id}});
  }
}
