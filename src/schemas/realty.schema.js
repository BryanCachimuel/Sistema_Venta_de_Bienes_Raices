import {z} from 'zod';

export const crearBienRaizSchema = z.object({
    inmueble: z.string({
        required_error: "El tipo de Inmueble es Requerido",
    }),
    descripcion: z.string({
        required_error: "La descripción del Inmueble es Requerida",
    }),
    propietario: z.string({
        required_error: "El nombre del propietario es Requerido",
    }),
    costo: z.number({
        required_error: "El Costo del Inmueble es Requerido",
    }).positive(),
    antiguedad: z.number({
        required_error: "Los Años de Antiguedad del Inmueble son Requeridos"
    }).positive(),
    fecha: z.string().datetime().optional(),
});