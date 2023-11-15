import express from 'express';
import cors from 'cors';
import db from './DB/database.js';
import InventarioRouter from './routers/routerProducts.js'
import MedicamentosRouter from './routers/routerMedicamentos.js'
const app = express();
app.use(cors());
app.use(express.json());

// las apis para los cruds
// crear convencion para que solo empiezen con minusculas
// buscar libreria que recibe las palabras que empiezan con Mayusculas
//app.use('/api/clientes', routerCliente);

app.use('/api/productos', InventarioRouter);
app.use('/api/medicamentos', MedicamentosRouter);

// Conexion a la DB
const startServer = async () => {
  try {
    await db.authenticate();
    console.log('Conexion exitosa a la DB');
    
    app.listen(3009, () => {
      console.log('Server UP running in http://localhost:3009/');
    });
  } catch (error) {
    console.log('Error de conexion a la DB:', error.message);
  }
};


startServer();
