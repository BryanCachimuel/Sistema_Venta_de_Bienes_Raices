import {Router} from 'express';
import {registro, iniciar_sesion, cerrar_sesion, inicio} from '../controllers/auth.controller.js'
import {autenticacionRequerida} from '../middlewares/validateToken.js'

const router = Router();

router.post('/registro', registro);
router.post('/iniciar_sesion', iniciar_sesion);
router.post('/cerrar_sesion', cerrar_sesion);

router.get('/inicio', autenticacionRequerida, inicio)

export default router;