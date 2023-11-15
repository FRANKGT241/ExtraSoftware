import db from "../DB/database.js"
import { DataTypes } from "sequelize";
import ModeMedicamentos from "./ModeMedicamentos.js";

const ModeProducts = db.define('inventario', {
    IdInventario: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    CantidadDisponible: { type: DataTypes.NUMBER},
    PrecioVenta: { type: DataTypes.DECIMAL},
    idMedicamento: { type: DataTypes.NUMBER },
    Estado:{ type: DataTypes.BOOLEAN } 
 }, { tableName: 'inventario' }); 
 
 ModeProducts.belongsTo(ModeMedicamentos, { foreignKey: 'idMedicamento' }); // Esto establece la relación con el modelo de medicamentos

export default  ModeProducts