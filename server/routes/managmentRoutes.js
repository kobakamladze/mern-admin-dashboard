import { Router } from 'express';
import managmentController from '../controllers/managmentController.js';

const managmentRoutes = Router();

managmentRoutes.get('/admins', managmentController.getAdmins);

export default managmentRoutes;
