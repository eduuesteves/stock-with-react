import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { connection } from "./database/connection.";

const server = express();
const connect = connection;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/hi", async(req: Request, res: Response) => {
    return res.json({ "Message": "Hello!" });
})

server.get("/", async (req: Request, res: Response) => {
        const query = "SELECT * FROM ne";
        const a = await connect.query(query);
         return res.json(a[0]);
})

server.get("/create-table-stock", async (req: Request, res: Response) => {
    try {
        const query = "CREATE TABLE IF NOT EXISTS stock (`idproduct` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(50) NOT NULL, `cost_price` FLOAT NOT NULL, `sale_price` FLOAT NOT NULL, `quantitty` INT NOT NULL, `product_validity` DATE NOT NULL, `description` VARCHAR(100) NOT NULL, PRIMARY KEY (`idproduct`), UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);"
        const created_table = await connect.query(query);

        console.log("Uhuu!! Tabela Stock criada!");
        return res.json(created_table);
    } catch(err) {
        console.log("Puts, algo deu errado \n" + err);
    }
});

server.get("/create-table-user", async (req: Request, res: Response) => {
    try {
        const query = "CREATE TABLE IF NOT EXISTS user (`iduser` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(50) NOT NULL, `username` VARCHAR(15) NOT NULL, `email` VARCHAR(40) NOT NULL, `password` VARCHAR(16) NOT NULL, `office` VARCHAR(20) NOT NULL, PRIMARY KEY (`iduser`), UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);"
        const created_table = await connect.query(query);

        console.log("Uhuu!! Tabela User criada!");
        return res.json(created_table);
    } catch(err) {
        console.log("Puts, algo deu errado \n" + err);
    }
});


server.listen(process.env.PORT || 4001, () => {
    console.log("Running!");
})