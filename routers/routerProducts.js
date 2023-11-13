import express from 'express';
import { getAllInventarios} 
from '../controllers/controllerProducts.js';

const InventarioRouter = express.Router();

InventarioRouter.get('/', getAllInventarios);

export default InventarioRouter