import {Router} from 'express';
import {autenticacionRequerida} from '../middlewares/validateToken.js';
import {listaBienesRaices, crearBienesRaices, obtenerBienesRaices, actualizarBienesRaices, eliminarBienesRaices} from '../controllers/realty.controller.js'

const router = Router();

router.get('/bienes_raices', autenticacionRequerida, listaBienesRaices);
router.get('/bienes_raices/:id', autenticacionRequerida, obtenerBienesRaices);
router.post('/bienes_raices', autenticacionRequerida, crearBienesRaices);
router.delete('/bienes_raices/:id', autenticacionRequerida, eliminarBienesRaices);
router.put('/bienes_raices/:id', autenticacionRequerida, actualizarBienesRaices);

export default router;