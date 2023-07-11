import {Router} from 'express';
import {registro, iniciar_sesion, cerrar_sesion, inicio, verificarToken} from '../controllers/auth.controller.js';
import {autenticacionRequerida} from '../middlewares/validateToken.js';

/* realizando las validaciones para los esquemas de registro e inicio de sesión */
import {validarEsquema} from '../middlewares/validator.middleware.js';
import {RegistroEsquema, InicioSesionEsquema} from '../schemas/auth.schema.js'

const router = Router();

router.post('/registro', validarEsquema(RegistroEsquema), registro);
router.post('/iniciar_sesion', validarEsquema(InicioSesionEsquema), iniciar_sesion);
router.post('/cerrar_sesion', cerrar_sesion);

router.get('/verificar', verificarToken);

router.get('/perfil_usuario', autenticacionRequerida, inicio)

export default router;