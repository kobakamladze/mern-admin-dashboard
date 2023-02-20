import { Router } from 'express';
import generalController from '../controllers/generalController.js';

console.log(generalController);

const generalRoutes = Router();

/*
    GET general/user/:id

    Fetches user by id
*/
generalRoutes.get('/user/:id', generalController.getUser);

/*
    GET general/product

    Fetches products and product stats
*/
generalRoutes.get('/product', generalController.getProduct);

export default generalRoutes;
