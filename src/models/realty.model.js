import mongoose from 'mongoose';

const RealtySchema = new mongoose.Schema({
    inmueble: {
        type: String,
        required: true,
    }, 
    descripcion: {
        type: String,
        required: true,
    },
    propietario: {
        type: String,
        required: true,
    }, 
    costo:{
        type: Number,
        required: true,
    },
    antiguedad: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
},{
    timestamps: true
});

export default mongoose.model('Realty', RealtySchema);