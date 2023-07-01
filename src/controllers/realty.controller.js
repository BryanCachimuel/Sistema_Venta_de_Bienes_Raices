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

export const actualizarBieneRaiz = async (req, res) =>{
    try {
        /* el 3er parámetro {new:true} hace referencia para obtener el dato nuevo que se acaba de actualizar */
        const actualizaBienRaiz = await BienesRaices.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!actualizaBienRaiz) return res.status(404).json({ message: "Bien Raíz no Encontrado" });
        res.json(actualizaBienRaiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const eliminarBienRaiz = async (req, res) =>{
    try {
        const borrarBienRaiz = await BienesRaices.findByIdAndDelete(req.params.id);
        if(!borrarBienRaiz) return res.status(404).json({ message: "Bien Raíz no Encontrado" });
        res.json(borrarBienRaiz);   
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};