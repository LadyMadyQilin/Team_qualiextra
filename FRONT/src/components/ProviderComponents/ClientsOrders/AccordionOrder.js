import React, { useState } from 'react';
import down from '../../../assets/down.svg'
import up from '../../../assets/up.svg'
import './accordionOrder.scss'
import { UseSignInStore } from '../../AuthLogin/signInStore';
const AccordionOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, isAdmin, isProvider} = UseSignInStore();
  return (
    <article className='infosOrder'>

      <section className='infosOrder__containerTop'>
        <div className='infosOrder__boxTop'>
          <div className='infosOrder__nameBox'>
            <span>Nom:</span>
            <p>Dupont</p>
          </div>
          <div className='infosOrder__surnameBox'>
            <span>Prénom:</span>
            <p>Jean</p>
          </div>
        </div>
        <div className='infosOrder__numOrderBox'>
          <span>Numéro de commande</span>
          <p>22664488</p>
        </div>
        <div className='infosOrder__propertyBox'>
          <span>Etablissement</span>
          <p>0123456789</p>
        </div>
        <button className='infosOrder__buttonOC' onClick={() => setIsOpen(!isOpen)}><img src={isOpen ? up : down}></img></button>
      </section>
      {isOpen && (
        <section className='infosOrder__containerBottom'>
          <div className='infosOrder__idClientBox'>
            <span>Identité client</span>
            <p>????</p>
          </div>
          <div className='infosOrder__adressBox'>
            <span>Adresse de réservation</span>
            <p>9 rue de la picolle</p>
          </div>
          <div className='infosOrder__mailBox'>
            <span>Mail</span>
            <p>jean.delapelouse@gmail.com</p>
          </div>
          <div className='infosOrder__phoneBox'>
            <span>Téléphone</span>
            <p>0752689523</p>
          </div>
          <div className='infosOrder__dateOrderBox'>
            <span>Date</span>
            <p>28/12/23</p>
          </div>
          <div className='infosOrder__durationBox'>
            <span>Durée</span>
            <p>1 journee</p>
          </div>
          <div className='infosOrder__serviceOrderBox'>
            <span>Service réservé</span>
            <p>degustation de rhum</p>
          </div>
          <div className='infosOrder__priceBox'>
            <span>Prix</span>
            <p>30€</p>
          </div>
          {isAdmin() && (
            <>
              <button>Bloquer</button>
              <button>Supprimer</button>
            </>
          )}
        </section>
      )}
    </article>

  )
}
export default AccordionOrder





