import Ranking from '../Ranking'
import style from './style.module.css'
import Mundial from '../../images/logo-site-cbtm.svg'
import LogoChina from '../../images/tmb.png'
import Vermelha from '../../images/vermelha.png'
import Estilosa from '../../images/logo-preta.png'

export default function Rankings() {
    return (

<div className={style.containerRanking}>
<Ranking imagem={Mundial} nome="Campeonato Mundial De Tênis de Mesa" />
<Ranking imagem={LogoChina} nome="Campeonato Mundial De Tênis de Mesa" />
<Ranking imagem={Vermelha} nome="Campeonato Mundial De Tênis de Mesa" />
<Ranking imagem={LogoChina} nome="Campeonato Mundial De Tênis de Mesa" />
</div>


    )
}