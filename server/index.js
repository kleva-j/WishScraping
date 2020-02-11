import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

require('dotenv').config();

const app = express();
const port = 2020;

app
  .use(logger('dev'))
  .use(cors({ origin: true }))
  .use(bodyParser.json())  
  .use(bodyParser.urlencoded({ extended: true }))
  .use('*', (_req, res) => res.status(200).json({ message: 'Wellcome to the future.'}))
  .listen(port, () => console.log(`Server running on port ${port}`));
