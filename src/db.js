import mongoose from 'mongoose';

export const conexionBD = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/bienes_raices');
        console.log("Conectado hacia la base de datos");
    } catch (error) {
        console.log("No se a podido conectar hacia la base de datos" + error)
    }
}