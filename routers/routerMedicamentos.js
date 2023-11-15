import express from 'express';
import { getAllMedicamentos} 
from '../controllers/controllerMedicamentos.js';

const MedicamentosRouter = express.Router();

MedicamentosRouter.get('/', getAllMedicamentos);

export default MedicamentosRouter