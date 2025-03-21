import style from './style.module.css'

export default function Ranking({ imagem, nome }) {
    return (


        <div className={style.ciaxaRanking}>
            <div className={style.cartoes}>

                <img src={imagem} alt="Logo federacao" />

                <h4>{nome}</h4>


            </div>

        </div>
    )
}