import '../css/Card.css';

export default function Card(props) {
    return (
        <div className="Card">
            <h2 className="Title">{props.titulo}</h2>
            <p className="Description">
                {props.children}
            </p>
        </div>
    )
}