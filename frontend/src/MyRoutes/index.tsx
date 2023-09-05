import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Stock } from "../components/Stock";
import { AddProduct } from "../components/AddProduct";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
    )
}