import sty from './style.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from '../../images/logo.webp'

export default function Header() {
   return(
    <header>
          <a href="" ><img src={Logo} alt="" /></a>
         <div className={sty.barraPesquisa}>
        <input className={sty.barra} type="text" placeholder="Pesquisar" />
        <FaMagnifyingGlass className={sty.lupa} />
    </div>
    <div className={sty.opcoes}>
      
        <nav className={sty.bar}>
        <a href="">Inicio</a>
        <a href="">Filmes</a>
        <a href="">Atletas</a>
        <a href="">Modalidades</a>
        <a href="">Sobre</a>
        </nav>
    </div>
   
</header>
   )
}