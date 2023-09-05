import { Link } from "react-router-dom";

export function Stock() {
    return (
        <main>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Custo</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>Mouse</td>
                    <td>3</td>
                    <td>R$ 4,00</td>
                    <td>R$ 7,50</td>
                </tr>
                <tr>
                    <td>Mouse</td>
                    <td>3</td>
                    <td>R$ 4,00</td>
                    <td>R$ 7,50</td>
                </tr>
                <tr>
                    <td>Mouse</td>
                    <td>3</td>
                    <td>R$ 4,00</td>
                    <td>R$ 7,50</td>
                </tr>
                <tr>
                    <td>Mouse</td>
                    <td>3</td>
                    <td>R$ 4,00</td>
                    <td>R$ 7,50</td>
                </tr>
            </table>
            <Link to="/addproduct">
                <button>Adicionar produto</button>
            </Link>
            <button>Editar tabela</button>
        </main>
    )
}