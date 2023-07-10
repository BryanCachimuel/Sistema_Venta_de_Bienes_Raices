import axios from './axios';

export const registroRequest = user => axios.post(`/registro`, user);

export const inicioSesionRequest = user => axios.post(`/iniciar_sesion`, user);