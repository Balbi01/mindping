import { Router } from "express";

import userRoutes from "./user.routes";

const router = Router();

router.get("/", (_req, res) => {
    res.status(200).json({ message: "¡Bienvenido al API!" });
});
// Enrutado a métodos de usuarios
router.use("/users", userRoutes);

export default router;