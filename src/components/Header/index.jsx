import estilo from "./index.module.css"
import { LuDog } from "react-icons/lu";
export default function Header (){
    return(
        <header className={estilo.header}>
            <div className={estilo.caixaHeader}>
                <div className={estilo.caixaLogo}>
                    <LuDog className={estilo.iconeLogo}/>
                    <p className={estilo.textoLogo}>Pet<span>Amigo</span></p>
                </div>
                <menu>
                    <ul className={estilo.listaMenu}>
                        <li className={estilo.itemMenu}><a className={estilo.menuLink} href="#">Serviços</a></li>
                        <li className={estilo.itemMenu}><a className={estilo.menuLink} href="#">Sobre</a></li>
                        <li className={estilo.itemMenu}><a className={estilo.menuLink} href="#">Depoimentos</a></li>
                        <li className={estilo.itemMenu}><a className={`${estilo.menuLink} ${estilo.menuLinkDiferente}`} href="#">Agendar Visita</a></li>
                    </ul>
                </menu>
            </div>
        </header>
        );
    
}