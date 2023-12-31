import Usuario from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { crearAccesoToken } from "../libs/jwt.js";
import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js'

export const registro = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({email});
    /* validando que los usuarios nuevos no ingresen el mismo correo que se encuentre registrado */
    if(usuarioEncontrado) return res.status(400).json(["El correo ya está en uso"]);

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

export const iniciar_sesion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ email });
    if (!usuarioEncontrado)
      return res.status(400).json(["Usuario no Encontrado"]);

    const contraseniasCoinciden = await bcryptjs.compare(
      password,
      usuarioEncontrado.password
    );
    if (!contraseniasCoinciden)
      return res.status(400).json(["La contraseña ingresada es Incorrecta"]);

    /* llamamos a la función creatAccesoToken definida en el directorio libs */
    const token = await crearAccesoToken({ id: usuarioEncontrado._id });
    res.cookie("token", token);

    /* aquí se definen solo los atributos que se van a utilizar en el frontend */
    res.json({
      id: usuarioEncontrado._id,
      username: usuarioEncontrado.username,
      email: usuarioEncontrado.email,
      createdAt: usuarioEncontrado.createdAt,
      updatedAt: usuarioEncontrado.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cerrar_sesion = (req, res) => {
  res.cookie('token',"",{
    expires: new Date(0)
  });
  return res.status(200).json({message:"Se cerro la sesión"});
};

export const inicio = async (req, res) =>  {
  const usuarioEncontrado = await Usuario.findById(req.user.id);
  if(!usuarioEncontrado) return res.status(400).json({message: "Usuario no Encontrado"});
  return res.json({
    id: usuarioEncontrado._id,
    username: usuarioEncontrado.username,
    email: usuarioEncontrado.email,
    createdAt: usuarioEncontrado.createdAt,
    updatedAt: usuarioEncontrado.updatedAt,
  });
};

export const verificarToken = async (req, res) => {
  const {token} = req.cookies

  if(!token) return res.status(401).json({message: "No autorizado"});

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if(err) return res.status(401).json({message: "No autorizado"});

    const usuarioEncontrado = await Usuario.findById(user.id);
    if(!usuarioEncontrado) return res.status(401).json({message: "No autorizado"});

    return res.json({
      id: usuarioEncontrado._id,
      username: usuarioEncontrado.username,
      email: usuarioEncontrado.email
    });
  });
};