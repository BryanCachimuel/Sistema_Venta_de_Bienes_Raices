import {Router} from 'express';
import {autenticacionRequerida} from '../middlewares/validateToken.js';
import {listaBienesRaices, crearBienRaiz, obtenerBieneRaiz, eliminarBienRaiz, actualizarBieneRaiz} from '../controllers/realty.controller.js';

import {validarEsquema} from '../middlewares/validator.middleware.js';
import {crearBienRaizSchema, actualizarBienRaizSchema} from '../schemas/realty.schema.js'

const router = Router();

router.get('/bienes_raices', autenticacionRequerida, listaBienesRaices);
router.get('/bienes_raices/:id', autenticacionRequerida, obtenerBieneRaiz);
router.post('/bienes_raices', autenticacionRequerida, validarEsquema(crearBienRaizSchema), crearBienRaiz);
router.delete('/bienes_raices/:id', autenticacionRequerida, eliminarBienRaiz);
router.put('/bienes_raices/:id', autenticacionRequerida, validarEsquema(actualizarBienRaizSchema), actualizarBieneRaiz);

export default router;