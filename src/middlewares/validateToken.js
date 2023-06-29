import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js'

export const autenticacionRequerida = (req, res, next) => {
    const {token} = req.cookies;
    if(!token) res.status(401).json({message:"No existe token, Autorización Denegada"});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).json({message: "Token Invalido"});
        req.user = user;
        next();
    });
}