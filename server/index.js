import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import appRouter from './src/routes/index.js';

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

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() =>
    // Serevr setup
    app.listen(PORT, () => console.log(`listening on PORT ${PORT}...`))
  )
  .catch(e => console.log(e));
