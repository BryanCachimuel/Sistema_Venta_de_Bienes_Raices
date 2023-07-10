/* configuración de axios */
import axios from 'axios';

/* se establece las cookies en true para obtener las mismas en el frontend */
const instancia = axios.create({
    baseURL: 'http://localhost:3005/api',
    withCredentials: true
})

export default instancia;