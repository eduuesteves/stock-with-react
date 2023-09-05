import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin() {
        if(username === "admin" && password === "admin") {
            navigate("/stock");
        }
    }

    return (
        <form>
            <label>
                Username
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button onClick={handleLogin}>Log In</button>
        </form>
    )
}