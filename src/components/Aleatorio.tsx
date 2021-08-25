interface Valores {
    min: number;
    max: number;
}

export default (props: Valores) => {
    const { min, max } = props;

    const aleatorio = (Math.random() * (max - min) + min) | 0;

    return (
        <div>
            <p>Valor minimo: {min}</p>
            <p>Valor maximo: {max}</p>
            <p>Valor aleatorio: {aleatorio}</p>
        </div>
    )
}