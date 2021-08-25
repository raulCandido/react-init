import '../css/Index.css'

export default function PrimeiroComponente(props) {
    return (
        <h2 className="corTitulo">{props.children}</h2>
    )
}