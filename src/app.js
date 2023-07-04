import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRutas from './routes/auth.routes.js';
import bienesRutas from './routes/realty.routes.js';

const app = express();

/* le decimos mediante este cors que el backend funcione solo con el frontend a traves del puerto 5173 */
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRutas);
app.use('/api/',bienesRutas);

export default app;     