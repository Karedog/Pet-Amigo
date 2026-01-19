import estilo from "./index.module.css"
import { FaStar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import cachorro from "@/../public/cachorro.avif"
import Image from "next/image";

export default function Banner(){
    return(
        <section className={estilo.secaoBanner}>
            <div className={estilo.Banner}>
                <div className={estilo.BannerTexto}>
                    <p className={estilo.textoTopo}><FaStar  className={estilo.estrela}/> Votado o melhor petshop da cidade</p>
                    <p className={estilo.textoDestaque}>Amor e cuidado que seu melhor amigo <span>merece</span>.</p>
                    <p className={estilo.texto}>Banho, tosa, veterinária e day care com profissionais apaixonados por animais. Seu pet vai se sentir em casa.</p>
                    <div className={estilo.caixaButton}>
                        <button className={`${estilo.button} ${estilo.buttonAgendar}`}><CiCalendar className={estilo.CiCalendar} /> Agendar Horário</button>
                        <button className={`${estilo.button} ${estilo.buttonTelefone}`}><BsTelephone className={estilo.BsTelephone}/> (11) 99999-9999</button>
                    </div>
                    <div className={estilo.caixaTextoCheck}>
                        <p className={estilo.textoCheck}><CiCircleCheck className={estilo.CiCircleCheck}/> Profissionais Certificados</p>
                        <p className={estilo.textoCheck}><CiCircleCheck className={estilo.CiCircleCheck}/> Ambiente Monitorado</p>
                    </div>
                </div>
                <div className={estilo.BannerImagem}>
                    <Image src={cachorro}/>
                    <div>
                        <FaHeart/>
                        <div>
                            <p>Clientes Felizes</p>
                            <p>+1.500 pets atendidos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}