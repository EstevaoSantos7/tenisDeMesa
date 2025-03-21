import React from 'react';
import style from './style.module.css';
import Categoria from '../Categoria';
import Hugo from '../../images/hugo.jpg'
import Deng from '../../images/deng.jpg'
import HugoY from '../../images/Hugo_Hoyama.jpg'
import MaLong from '../../images/malong.avif'


export default function Categorias() {
  return (
    <section className={style.categorias}>
      <h2>Atletas em Destaque</h2>
      <p>Conheça as referencias do Tênis de Mesa</p>
      <div className={style.listaCategorias}>
        <Categoria imagem={Hugo} nome="Hugo Calderano"
          description="Hugo Marinho Borges Calderano. Em janeiro de 2022, atingiu o 3° lugar no ranking mundial. "/>
      <Categoria imagem={Deng} nome="Deng Yaping" description="Deng Yaping é uma mesa-tenista chinesa campeã mundial e olímpica."/>
      <Categoria imagem={HugoY} nome="Hugo Hoyama" description="Hugo Hoyama, tendo participado de seis Olimpíadas e sete Jogos Pan-Americanos."/>
      <Categoria imagem={MaLong} nome="Ma Long" description="  No circuito profissional, ele ganhou 28 títulos em simples e 24 títulos em eventos de duplas."/>


      </div>
    </section>
  );
}
