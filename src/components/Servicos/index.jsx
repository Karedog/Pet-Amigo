import estilo from "./index.module.css"
import CardServico from "../CardServico";
export default function Servicos(){
    return (
        <section className={estilo.secaoServicos}>
            <div className={estilo.servicosTexto}>
                <p><span>NOSSOS SERVIÇOS</span></p>
                <p className={estilo.servicosTextoDestaque}>Tudo para o bem-estar do seu pet</p>
                <p>Oferecemos uma gama completa de serviços para manter seu companheiro saudável, limpo e muito feliz.</p>
            </div>
            <div className={estilo.servicosCaixaCards}>
                <CardServico icone="icone" cardTexto="Produtos hipoalergênicos, tosa na tesoura e hidratação profunda para todos os tipos de pelagem." cardTitulo="Banho & Tosa"/>
            </div>
        </section>
    );
}