import { Router } from 'express';
import generalController from '../controllers/generalController.js';

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
generalRoutes.get('/products', generalController.getProducts);

/*
    GET general/customers

    Fetches customers
*/
generalRoutes.get('/customers', generalController.getCustomers);

/*
    GET general/customers

    Fetches transactions
*/
generalRoutes.get('/transactions', generalController.getTransactions);

export default generalRoutes;
