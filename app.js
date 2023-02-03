import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import express from 'express';
import homeRouter from './src/routes/home';
import userRouter from './src/routes/user';
import tokensRouter from './src/routes/tokens';
import alunoRouter from './src/routes/aluno';
import fotoRouter from './src/routes/foto';

// eslint-disable-next-line no-unused-vars
import connection from './src/database/Connection';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'upload')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/tokens/', tokensRouter);
    this.app.use('/alunos/', alunoRouter);
    this.app.use('/foto/', fotoRouter);
  }
}

export default new App().app;
