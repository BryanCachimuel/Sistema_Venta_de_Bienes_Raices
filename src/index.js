import app from './app.js';
import {conexionBD} from './db.js'

/* trayendo la conexión hacia la base de datos */
conexionBD();

/* levantamiento del servidor en el puerto 3005 */
const puerto = 3005;
app.listen(puerto);
console.log(`Servidor en el puerto: ${puerto}`);  