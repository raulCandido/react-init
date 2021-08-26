import Aleatorio from "./Aleatorio"
import Card from "./Card"
import PrimeiroComponente from "./PrimeiroComponente"
import '../css/Index.css'
import ValidadorNotas from "./ValidadorNotas"
import Repeticao from "./Repeticao"



export default function App() {
    return (
        <div id="app">
            <PrimeiroComponente>
                DESAFIO REACT BRIGANDO COM CSS
            </PrimeiroComponente>
            <Card titulo='Desafio aleatorio'>
                <Aleatorio min={10} max={20} />
            </Card>
            <Card titulo='Um card dentro de um card'>
                <PrimeiroComponente>
                </PrimeiroComponente>
            </Card>
            <Card>
                <ValidadorNotas nome='Raul Candido' nota={4}/>
            </Card>
            <Card titulo='Repetições'>
                <Repeticao/>
            </Card>
        </div>

    )
}