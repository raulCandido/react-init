import '../css/Tabs.css'
import pessoa from "../data/pessoa"

export default function Repeticao() {

    const corLinha = (i) => {
        if (i % 2 === 0) {
            return 'corLinhaPar'
        }
        return 'corLinhaImpar'
    }

    const pessoaRepetida = pessoa.map((p, i) => {
        return (
            <tbody>
                <tr>
                    <td className={corLinha(i)}>{p.id}</td>
                    <td className={corLinha(i)}>{p.nome}</td>
                    <td className={corLinha(i)}>{p.preco}</td>
                </tr>
            </tbody>
        )
    })

    return (
        <div className="containerTabs">
            <table>
                <thead>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PRECO</th>
                </thead>
                {pessoaRepetida}
            </table>
        </div>
    )
}