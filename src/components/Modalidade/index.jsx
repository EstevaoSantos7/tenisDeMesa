import style from './style.module.css'

export default function Modalidade({ imagem, name, description }) {
    return (

        <div className={style.caixaModalidade}>
            <div className={style.conteudo}>
                <img src={imagem} alt="Foto Modalidade" />
                <div className={style.textoModalidade}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>

    )

}