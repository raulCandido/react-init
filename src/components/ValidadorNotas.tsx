import '../css/Index.css'

interface Aluno {
    nome: string;
    nota: number;
}

export default function ValidadorNotas(props: Aluno) {
    return (
        <div className="cor">
            <div>Nome do aluno: {props.nome}</div>
            <div>Nota do aluno é: {calcularNumero(props.nota)}</div>
            <div>Aluno aprovado? {passouDeAno(props.nota)}</div>
        </div>
    )
}

function calcularNumero(numero: number) {
    if (typeof numero === 'number') {
        return numero
    }
    return 'n é um numero'
}

function passouDeAno(nota: number) {
    if(nota >= 7){
        return 'Passou meu chapa.'
    }
    return 'Não, ta lascado meu chapa.'
}


