import BienesRaices from '../models/realty.model.js';

export const listaBienesRaices = async (req, res) =>{
    try {
        const bienesRaices = await BienesRaices.find();
        res.json(bienesRaices); 
    } catch (error) {
        res.status(500).json({message: error.message});
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
            fecha
        });
        const bienraizGuardado = await bienraiz.save();
        res.json(bienraizGuardado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerBieneRaiz = async (req, res) =>{
    try {
       const bienraiz = await BienesRaices.findById(req.params.id);
       if(!bienraiz) return res.status(404).json({ message: "Bien Raíz no Encontrado" }); 
       res.json(bienraiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

