import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDatabase } from './config/database.js';
import empleadoRoutes from './routes/empleados.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();
const port = 3000;

connectDatabase();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Registrar las rutas de empleados bajo /api/v1
app.use('/api/v1', empleadoRoutes);

// Middleware global de manejo de errores
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});