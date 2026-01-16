import estilo from "./index.module.css"
import { CiStar } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import cachorro from "@/../public/cachorro.avif"
import Image from "next/image";

export default function Banner(){
    return(
        <section>
            <div className={estilo.Banner}>
                <div className={estilo.BannerTexto}>
                    <p className={estilo.textoTopo}><CiStar/> Votado o melhor petshop da cidade</p>
                    <p className={estilo.textoDestaque}>Amor e cuidado que seu melhor amigo <span>merece</span>.</p>
                    <p className={estilo.texto}>Banho, tosa, veterinária e day care com profissionais apaixonados por animais. Seu pet vai se sentir em casa.</p>
                    <div>
                        <button><CiCalendar /> Agendar Horario</button>
                        <button><BsTelephone/> (11) 99999-9999</button>
                    </div>
                    <p className={estilo.textoCheck}><CiCircleCheck/> Profissionais Certificados</p>
                    <p className={estilo.textoCheck}><CiCircleCheck/> Ambiente Monitorado</p>
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