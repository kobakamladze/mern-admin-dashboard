import { Router } from 'express';
import clientController from '../controllers/clientController.js';

const clientRoutes = Router();

/*
    GET client/geography

    Returns array of objects with amount of users for every country
*/
clientRoutes.get('/geography', clientController.getGeography);

export default clientRoutes;
