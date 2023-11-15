// controllers/controllerProducts.js
import InventarioModel from "../Models/ModeProducts.js";
import ModeMedicamentos from "../Models/ModeMedicamentos.js";

export const getAllInventarios = async (req, res) => {
    try {
        const inventarios = await InventarioModel.findAll({
            include: ModeMedicamentos, // Esto asegura que se incluya la información del medicamento
        });
        res.json(inventarios);
    } catch (error) {
        res.json({ message: error.message });
    }
}
