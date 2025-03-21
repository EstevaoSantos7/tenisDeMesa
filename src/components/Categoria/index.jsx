import style from './style.module.css'

export default function ({imagem, nome , description}){
    return (
    
<div className={style.categoria}>
          <div className={style.iconeCategoria}>
            <img className={style.fotoAtleta} src={imagem} alt="Imagem Atleta" />
          </div>
         <div className={style.conteudo}>
         <h3>{nome}</h3>
          <p>{description}</p>
          <button className={style.botao}>Ver mais</button>
         </div>
        </div>
    
    )
}

