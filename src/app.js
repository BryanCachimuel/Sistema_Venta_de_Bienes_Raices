import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'

import authRutas from './routes/auth.routes.js'
import bienesRutas from './routes/realty.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRutas);
app.use('/api/',bienesRutas);

export default app;     