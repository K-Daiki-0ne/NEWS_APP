import express, { Router } from 'express';
import newsRouter from './v1/index';

const router: Router = express.Router();
router.use('/', newsRouter);

export default router;