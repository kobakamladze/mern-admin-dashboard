import { Router } from 'express';

import clientRouter from './clientRoutes.js';
import generalRouter from './generalRoutes.js';
import managmentRouter from './managmentRoutes.js';
import salesRouter from './salesRoutes.js';

const appRouter = Router();

// Routes configuration
appRouter.use('/client', clientRouter);
appRouter.use('/general', generalRouter);
appRouter.use('/managment', managmentRouter);
appRouter.use('/sales', salesRouter);

export default appRouter;
