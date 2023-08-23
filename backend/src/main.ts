import 'dotenv/config';

import express from 'express';

const PORT = process.env.PORT ?? 3333;

const server = express();

server.use(express.json());

server.listen(PORT, () => console.log(`⚙ Server running at http://localhost:${PORT}`));
