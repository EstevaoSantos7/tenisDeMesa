import style from './syle.module.css'
import Video from '../../videos/tenis.mp4'

export default function HeroVideo() {
    return (
        <div className={style.containerHero}>
            <video autoPlay loop muted className={style.video}>
                <source src={Video} type='video/mp4' />
            </video>

            <div className={style.conteudo}>
                <h1>Net<strong>Flix</strong></h1>
                <h1>Minicraft</h1>
                <div className={style.infoMeta}>

                    <span>#1 em alta hoje</span>
                    <span>TV-3</span>

                </div>
                <p>  Minecraft Movie é um futuro filme de aventura americano, baseado no 
                    videogame homônimo da Mojang Studios. Produzido por Warner Bros. Pictures, Legendary Pictures,
                     Mojang e Vertigo Entertainment, o filme será distribuído globalmente pela Warner Bros. </p>
                <div className={style.botoes}>
                    <button className={style.botaoAssistir} >
                        Assistir
                    </button>
                    <button className={style.botaoInfo}>
                        Saiba Mais
                    </button>
                </div>
            </div>
        </div>

    )
}