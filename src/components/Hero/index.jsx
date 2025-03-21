import FundoHero from '../../images/unnamed.jpg'
import style from './style.module.css'

export default function Hero() {
    return (
        <div id='hero' className={style.containerHero}>
            <div className={style.carrosselSlide} >

                <div className={style.conteudo}>
                    <div className={style.carrosselTexto}>
                        <h1>Tenis de Mesa</h1>
                        <span >O famoso ping-pong ou pingue-pongue</span>
                        <p>O tênis de mesa, ou pingue-pongue, é um esporte empolgante e de ritmo acelerado, onde agilidade, precisão e reflexos rápidos são essenciais.
                            Jogadores, sozinhos ou em duplas, se enfrentam em uma mesa dividida por uma rede, tentando fazer a bola saltar no lado do adversário de forma
                            imprevisível.</p>
                    </div>
                    <div className={style.botao}>
                        <button className={style.verMais}><a href="#">Ver Mais</a> </button>

                    </div>
                </div>

            </div>

        </div>

    )
}