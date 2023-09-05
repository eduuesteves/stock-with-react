import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { connection } from "./database/coneection.";

const server = express();
const connect = connection;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/", async (req: Request, res: Response) => {
    return res.json({ message: "teste" });
})


server.listen(process.env.PORT || 4001, () => {
    console.log("Running!");
})