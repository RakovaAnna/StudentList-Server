import { AppDataSource } from '../data-source';
import { Student } from '../entities/Student';

export class StudentService {
  private studentRepository;

  constructor() {
    this.studentRepository = AppDataSource.getRepository(Student);
  }

  public getAll = async () => {
    return await this.studentRepository.find();
  }

  public index = async (id: number) => {
    return await this.studentRepository.findOne({ where: {id: id}});
  }

  public create = async (student: Student) => {
    return await this.studentRepository.save(student);
  }

  public update =  async(student: Student, id: number) => {
    return await this.studentRepository.update(id, student);
  }

  public delete = async (id: number) => {
    return await this.studentRepository.delete(id);
  }
}
