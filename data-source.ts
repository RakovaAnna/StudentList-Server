import "reflect-metadata";
import { DataSource } from "typeorm";
import { Student } from "./entities/Student";
import { Progress } from './entities/Progress';
require('dotenv').config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: "Students",
  synchronize: true,
  logging: false,
  entities: [Student, Progress],
  migrations: [],
  subscribers: [],
})
