import axios from 'axios';

const API = 'http://localhost:3005/api';

export const registroRequest = user => axios.post(`${API}/registro`, user);

export const inicioSesionRequest = user => axios.post(`${API}/iniciar_sesion`, user);