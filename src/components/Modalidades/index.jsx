import Modalidade from '../Modalidade'
import style from './style.module.css'
import DuplasPcd from '../../images/dupla-pcd.webp'

export default function Modalidades() {
    return (
        <div className={style.conteinerModalidades}>
            <div className={style.gridModalidades}>
                <Modalidade imagem={DuplasPcd} name="Tênis de Mesa Paralímpico"
                    description="O tênis de mesa adaptado é aberto a pessoas de todas as idades com diversas deficiências,
  sejam elas físicas, intelectuais ou sensoriais. " />

            </div>
        </div>

    )

}