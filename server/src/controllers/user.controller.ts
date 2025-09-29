import { Request, Response } from "express";
// import pg from "pg";
// import { PrismaClient } from "@prisma/client";
// // const prisma = new PrismaClient();

class UserController {

    /**
     * Método de obtención de usuarios (Ejemplo de uso)
     * @param req
     * @param res
     */
    public getUsers = (req: Request, res: Response) => {
        try {
            res.status(200).json({ message: "Endpoint para listado de usuarios?!" });
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default new UserController();