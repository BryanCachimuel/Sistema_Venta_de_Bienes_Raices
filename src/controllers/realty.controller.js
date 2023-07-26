import BienesRaices from '../models/realty.model.js';

export const listaBienesRaices = async (req, res) =>{
    try {
        const bienesRaices = await BienesRaices.find({
            user: req.user.id
        }).populate('user');
        res.json(bienesRaices); 
    } catch (error) {
        return  res.status(500).json({ message: "Se produjo un error al intentar listar los Bienes Raices" });
    }
};

export const crearBienRaiz = async (req, res) =>{
    const { inmueble, descripcion, propietario, costo, antiguedad, fecha } = req.body;
    try {
        const bienraiz = new BienesRaices({
            inmueble,
            descripcion,
            propietario,
            costo,
            antiguedad,
            fecha,
            user: req.user.id
        });
        const bienraizGuardado = await bienraiz.save();
        res.json(bienraizGuardado);
    } catch (error) {
        return  res.status(500).json({ message: "Se produjo un error al intentar crear un Bien Raíz" });
    }
};

export const obtenerBieneRaiz = async (req, res) =>{
    try {
       const bienraiz = await BienesRaices.findById(req.params.id).populate('user');
       if(!bienraiz) return res.status(404).json({ message: "Bien Raíz no Encontrado" }); 
       res.json(bienraiz);
    } catch (error) {
       return  res.status(404).json({ message: "Bien Raíz no Encontrado" });
    }
};

export const actualizarBieneRaiz = async (req, res) =>{
    try {
        /* el 3er parámetro {new:true} hace referencia para obtener el dato nuevo que se acaba de actualizar */
        const actualizaBienRaiz = await BienesRaices.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!actualizaBienRaiz) return res.status(404).json({ message: "Bien Raíz no Encontrado" });
        res.json(actualizaBienRaiz);
    } catch (error) {
        return  res.status(404).json({ message: "Bien Raíz no Encontrado no se puede Actualizar" });
    }
};

export const eliminarBienRaiz = async (req, res) =>{
    try {
        const borrarBienRaiz = await BienesRaices.findByIdAndDelete(req.params.id);
        if(!borrarBienRaiz) return res.status(404).json({ message: "Bien Raíz no Encontrado" });
        return res.status(200).json({message: "Bien Raíz Eliminado Satisfactoriamente"});
    } catch (error) {
        return  res.status(404).json({ message: "Bien Raíz no Encontrado" });
    }
};