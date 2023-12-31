import axios from './axios';

export const obtenerBienesRaicesRequest = () => axios.get('/bienes_raices');

export const obtenerBienRaizRequest = (id) => axios.get(`/bienes_raices/${id}`);

export const crearBienRaizRequest = (bienRaiz) => axios.post('/bienes_raices', bienRaiz);

export const actualizarBienRaizRequest = (id,bienRaiz) => axios.put(`/bienes_raices/${id}`, bienRaiz);

export const eliminarBienRaizRequest = (id) => axios.delete(`/bienes_raices/${id}`);