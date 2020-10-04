import express, { Router } from 'express';

const newsRouter: Router = express.Router();

newsRouter.get('/');

export default newsRouter;