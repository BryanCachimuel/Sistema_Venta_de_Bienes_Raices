import Usuario from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { crearAccesoToken } from "../libs/jwt.js";

export const registro = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const passwordHash = await bcryptjs.hash(password, 10);

    const nuevoUsuario = new Usuario({
      username,
      email,
      password: passwordHash,
    });

    const usuarioGuardado = await nuevoUsuario.save();
    /* llamamos a la función creatAccesoToken definida en el directorio libs */
    const token = await crearAccesoToken({ id: usuarioGuardado._id });
    res.cookie("token", token);

    /* aquí se definen solo los atributos que se van a utilizar en el frontend */
    res.json({
      id: usuarioGuardado._id,
      username: usuarioGuardado.username,
      email: usuarioGuardado.email,
      createdAt: usuarioGuardado.createdAt,
      updatedAt: usuarioGuardado.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inicio_sesion = (req, res) => {
  res.send("Inicio de Sesión");
};
