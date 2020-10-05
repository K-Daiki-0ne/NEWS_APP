import express, { Router } from 'express';
import { get } from '../../controller/newsController';

const newsRouter: Router = express.Router();

newsRouter.get('/', get);

export default newsRouter;