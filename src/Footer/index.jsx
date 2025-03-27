import style from "./style.module.css"
import { FiAlertCircle } from "react-icons/fi";

export default function Footer() { 
    return(
<footer>
    <nav className={style.bar}>
<p className={style.termos}><FiAlertCircle color="white"/>Termos de Condicoes</p>
<p className={style.desenvolvido}>Desenvolvido por <a href="https://github.com/">Estevão Santos</a></p>

    </nav>
</footer>

    )
}