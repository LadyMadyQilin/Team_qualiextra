import success from '../../assets/success.png'
import React from 'react'
import './confirmResa.scss'
const ConfirmResa = () => {
    return(
        <section className='confirmResa'>
        <h2 className='confirmResa__title'>Confirmation de réservation</h2>
        <div className='confirmResa__container'>
            <img src={success} className='confirmResa__img'></img>
            <h3 className='confirmResa__subtitle'>Lieu réservé avec succès !</h3>
            <p>Tu vas bientôt recevoir un mail avec les détails. Tu pourras également les retrouver dans ton espace <a>mes réservations</a></p>
            <button>Retour à la page d'accueil</button>
            <a>Annuler ou modifier ma réservation</a>
        </div>
        </section>
    )
}
export default ConfirmResa