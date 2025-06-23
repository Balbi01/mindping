import express from 'express';
import cors from 'cors';
import mainRouter from './routes';

const app = express();
const PORT = process.env.PORT || 3033;

// Ruta principal para el backend
app.get('/', (_req, res) => {
    res.send('Welcome to the Backend!');
});

// Endpoint para verificar que el servidor está funcionando
app.get('/ping', (_req, res) => {
    res.status(200).json({ message: 'pong' });
});

// Redirección a la API principal
app.use('/api', mainRouter);

// Escucha al puerto
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});