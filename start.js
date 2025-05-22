// server.js (opcional, solo si el adaptador no respeta el puerto)
import { createServer } from 'http';
import app from './dist/server/entry.mjs';  // Ruta generada por Astro

const port = process.env.PORT || 3000;
const server = createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});