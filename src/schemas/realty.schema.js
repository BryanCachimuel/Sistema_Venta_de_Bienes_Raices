import {z} from 'zod';

export const crearBienRaizSchema = z.object({
    inmueble: z.string({
        required_error: "El tipo de Inmueble es Requerido",
    }).min(4, {
        message: "El inmueble debe tener más caracteres",
    }),
    descripcion: z.string({
        required_error: "La descripción del Inmueble es Requerida",
    }).min(4, {
        message: "La Descripción debe contener la información completa del Inmueble",
    }),
    propietario: z.string({
        required_error: "El nombre del propietario es Requerido",
    }).min(4, {
        message: "El nombre del propietario debe tener más caracteres",
    }),
    costo: z.number({
        required_error: "El Costo del Inmueble es Requerido",
    }).positive(),
    antiguedad: z.number({
        required_error: "Los Años de Antiguedad del Inmueble son Requeridos"
    }).positive(),
    fecha: z.string().datetime().optional(),
});

export const actualizarBienRaizSchema = z.object({
    inmueble: z.string({
        required_error: "El tipo de Inmueble es Requerido",
    }).min(4,{
        message: "El inmueble debe tener más caracteres",
    }),
    descripcion: z.string({
        required_error: "La descripción del Inmueble es Requerida",
    }).min(4,{
        message: "La Descripción debe contener la información completa del Inmueble",
    }),
    propietario: z.string({
        required_error: "El nombre del propietario es Requerido",
    }).min(4,{
        message: "El nombre del propietario debe tener más caracteres",
    }),
    costo: z.number({
        required_error: "El Costo del Inmueble es Requerido",
    }).positive(),
    antiguedad: z.number({
        required_error: "Los Años de Antiguedad del Inmueble son Requeridos"
    }).positive(),
    fecha: z.string().datetime().optional(),
});