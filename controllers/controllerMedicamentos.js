import ModeMedicamentos from "../Models/ModeMedicamentos.js";
const tableName = "medicamento";


export const getAllMedicamentos = async (req, res) => {
    try {
        const medicamentos = await ModeMedicamentos.findAll();
        res.json(medicamentos);
    } catch (error) {
        res.json({ message: error.message });
    }
}