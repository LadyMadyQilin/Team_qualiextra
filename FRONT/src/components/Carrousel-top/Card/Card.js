import React from 'react';

import etablissement1 from '../../../assets/etablissement.jpg'
import * as styles from './card.module.scss'



const Card = ({style}) => {
    return(
        <article className={styles[`${style}`]}>
            <div className={styles[`${style}__containerImg`]}>
            <img className={styles[`${style}__image`]} src={etablissement1} alt=''></img>
            </div>
            <div className={styles[`${style}__container`]}>
                <h3 className={styles[`${style}__title`]}>Paris beauboug</h3>
                <p className={styles[`${style}__rate`]}>4.5<span>⭐</span></p>
            </div>
            <p className={styles[`${style}__localisation`]}>Paris 5e</p>
            <div className={styles[`${style}__containerAction`]}>
            <button className={styles[`${style}__btn`]}>Afficher</button>
            </div>
        </article>
    )
}

export default Card