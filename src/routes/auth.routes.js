import {Router} from 'express';
import {registro, inicio_sesion} from '../controllers/auth.controller.js'

const router = Router();

router.post('/registro', registro);
router.post('/inicio_sesion', inicio_sesion);

export default router;