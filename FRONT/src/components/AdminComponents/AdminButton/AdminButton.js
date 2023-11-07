import '../AdminButton/AdminButton.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className="adminButton__container">
            <h2 className="adminButton__title">En tant qu'administrateur, je souhaite :</h2>

            <nav className="adminButton__nav">
                <Link className="adminButton__link" to="/">Gérer les comptes prestataires</Link>

                <Link className="adminButton__link" to="/clients-list">Gérer les comptes clients</Link>

                <Link className="adminButton__link" to="/add-provider">Créer un compte prestataire</Link>

                <Link className="adminButton__link" to="/clients-orders">Gestion des réservations</Link>
            </nav>

        </div>
    )
}

export default Button;