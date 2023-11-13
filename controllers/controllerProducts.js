import InventarioModel from "../Models/ModeProducts.js";
const tableName = "inventario";


export const getAllInventarios = async (req, res) => {
    try {
        const inventarios = await InventarioModel.findAll();
        res.json(inventarios);
    } catch (error) {
        res.json({ message: error.message });
    }
}