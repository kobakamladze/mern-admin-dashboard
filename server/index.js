import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import appRouter from './routes/index.js';

// // MOCK DATA
import {
  dataProduct,
  dataUser,
  dataProductStat,
  dataTransaction,
  dataAffiliateStat,
} from './data.js';
// import Product from './models/ProductModel.js';
// import ProductStat from './models/ProductStatModel.js';
// import User from './models/UserModel.js';
// import Transaction from './models/TransactionModel.js';
// import AffiliateStat from './models/AffiliateStatModel.js';

// Configurating basic middlewares
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Router
app.use('/api', appRouter);

// Mongoose configuration
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    // Serevr setup
    app.listen(PORT, () => console.log(`listening on PORT ${PORT}...`));

    // User.insertMany(dataUser);
    // ProductStat.insertMany(dataProductStat);
    // Product.insertMany(dataProduct);
    // Transaction.insertMany(dataTransaction);
    // AffiliateStat.insertMany(dataAffiliateStat);
  })
  .catch(e => console.log(e));
