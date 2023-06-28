import express from 'express';
import morgan from 'morgan';

import authRutas from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api',authRutas);

export default app;     