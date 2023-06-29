import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'

import authRutas from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRutas);

export default app;     