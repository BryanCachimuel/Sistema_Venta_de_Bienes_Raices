/* archivo que se utilizará para hacer validaciones de datos */
/* z -> permite dar tipos de datos */
import {z} from 'zod';

export const RegistroEsquema = z.object({
    username: z.string({
        required_error: "Nombre de Usuario Requerido",
    }),
    email: z.string({
        required_error: "Correo de Usuario Requerido",
    }).email({
        message: "Correo Invalido",
    }),
    password: z.string({
        required_error: "La Contraseña es Requerida",
    }).min(6, {
        message: "La Contraseña debe tener mínimo 6 caracteres",
    }),
});

export const InicioSesionEsquema = z.object({
    email: z.string({
        required_error: "Correo de Usuario Requerido",
    }).email({
        message: "Correo Invalido",
    }),
    password: z.string({
        required_error: "La Contraseña es Requerida",
    }).min(6, {
        message: "La Contraseña debe tener mínimo 6 caracteres",
    }),
});


