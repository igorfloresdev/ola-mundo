import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {

  const minhaFoto = "https://github.com/igorfloresdev.png"

  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá Mundo!
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Igor Flores, desenvolvedor Front-End. Aqui Compartilho vários conhecimentos, espero que aprenda algo novo :D
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto Igor Flores"
        />
      </div>
    </div>
  )
}
