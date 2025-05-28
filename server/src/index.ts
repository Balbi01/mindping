import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.get("/ping", (_req, res) => {
    res.status(200).json({ message: "pong" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});