import { Router } from 'express';
import salesController from '../controllers/salesController.js';

const salesRouter = Router();

salesRouter.get('/overall-stats', salesController.getgetSales);

export default salesRouter;
