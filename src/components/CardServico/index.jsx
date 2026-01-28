import estilo from "./index.module.css"

export default function CardServico(props){
    return (
        <div className={estilo.caixaCard}>
            {props.icone}
            <h3>{props.cardTitulo}</h3>
            <p>{props.cardTexto}</p>
        </div>
    )
}