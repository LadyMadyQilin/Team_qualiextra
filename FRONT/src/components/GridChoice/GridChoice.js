import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import fr from 'date-fns/locale/fr';

import '../GridChoice/GridChoice.scss'

// Enregistrez le locale français
registerLocale('fr', fr);

const GridChoice = () => {
    const [dateArrivee, setDateArrivee] = useState(new Date());
    const [dateDepart, setDateDepart] = useState(new Date());
    const [nombrePackage, setNombrePackage] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Traitez les données du formulaire ici
    };

    const incrementer = () => {
        setNombrePackage(nombrePackage + 1);
    };

    const decrementer = () => {
        if (nombrePackage > 1) {
            setNombrePackage(nombrePackage - 1);
        }
    };
    return (
        <>
            <div className='grid__container'>

                <form onSubmit={handleSubmit}>
                    <div className='grid__inputDate'>

                        <div className='grid__dateContainer'>
                            <label className='grid__label'>Date d'arrivée
                            <br />
                                <DatePicker selected={dateArrivee} onChange={(date) => setDateArrivee(date)} locale='fr' dateFormat="dd/MM/yyyy" />
                            </label>
                        </div>

                        <div className='grid__inputDate'>

                            <label className='grid__label'>Date de départ
                            <br />
                                <DatePicker selected={dateDepart} onChange={(date) => setDateDepart(date)} locale='fr' dateFormat="dd/MM/yyyy" />
                            </label>

                        </div>

                        <label className='grid__label'>Nombre de package</label>
                        <span className='grid__checkbox'>
                            <button className='grid__buttonMembers' onClick={decrementer}>-</button>

                            <input id='members' type="text" value={nombrePackage} className='grid__input' readOnly />

                            <button className='grid__buttonMembers' onClick={incrementer}>+</button>
                        </span>

                    </div>

                    <div className='grid__boxcontainer'>
                        <p className='grid__label'>Ajouter des extras</p>

                        <span className='grid__checkbox'>
                            <input type="checkbox" name="" id="" />
                            <label className='grid__label'>Parking</label>
                        </span>

                        <span className='grid__checkbox'>
                            <input type="checkbox" name="" id="" />
                            <label className='grid__label'>Nuit à l'hotel</label>
                        </span>

                        <span className='grid__checkbox'>
                            <input type="checkbox" name="" id="" />
                            <label className='grid__label'>Accès au spa</label>
                        </span>

                        <span className='grid__checkbox'>
                            <input type="checkbox" name="" id="" />
                            <label className='grid__label'>Petit déjeuné</label>
                        </span>
                    </div>

                    <div className='grid__resultContainer'>
                        <p className='grid__price'>Prix €</p>

                        <button type="submit" className='grid__button'>Réserver</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GridChoice;