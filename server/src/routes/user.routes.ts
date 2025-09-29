import { Router } from "express";

import userController from "../controllers/user.controller";

const router = Router();

router.get('/', (_req, res) => {
    res.status(200).json({ message: "Welcome to the User API!" });
});

router.get('/list', userController.getUsers);

export default router;