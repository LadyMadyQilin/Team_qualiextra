import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import fr from 'date-fns/locale/fr';

// Enregistrez le locale français
registerLocale('fr', fr);

const MonFormulaire = () => {
  const [dateArrivee, setDateArrivee] = useState(new Date());
  const [dateDepart, setDateDepart] = useState(new Date());
  const [nombreParticipants, setNombreParticipants] = useState(1);
  const [motCle, setMotCle] = useState('');
  const [filtre, setFiltre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traitez les données du formulaire ici
  };

  const incrementer = () => {
    setNombreParticipants(nombreParticipants + 1);
  };

  const decrementer = () => {
    if (nombreParticipants > 1) {
      setNombreParticipants(nombreParticipants - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='containerForm__form'>
      <label>
        Date d'arrivée:
        <DatePicker selected={dateArrivee} onChange={(date) => setDateArrivee(date)} locale='fr'  dateFormat="dd/MM/yyyy"/>
      </label>
      <label>
        Date de départ:
        <DatePicker selected={dateDepart} onChange={(date) => setDateDepart(date)} locale='fr' dateFormat="dd/MM/yyyy" />

      </label>
      <label htmlFor='members' className='containerForm__member'>
        Participants
        <div className='containerForm__participation'>
        <button className='containerForm__buttonMembers' onClick={decrementer}>-</button>
        <input id='members' type="text" value={nombreParticipants} className='containerForm__membersInput' readOnly />
        
        <button className='containerForm__buttonMembers' onClick={incrementer}>+</button>
        </div>
        
      </label>
      
      <div className='containerForm__layout'>
      <label htmlFor='keywords' title='Recherche par mots-clés'>
        <input id='keywords' placeholder='Recherche par mots-clés' className='containerForm__keywordsInput' type="text" value={motCle} onChange={(event) => setMotCle(event.target.value)} />
      </label>
      <label htmlFor='filters'>
        Filtres
        <input id='filters' type="text" value={filtre} className='containerForm__filtersInput' onChange={(event) => setFiltre(event.target.value)} />
      </label>
      <input className="containerForm__submit" type="submit" value="Recherche" />
      </div>
    </form>
  )
};

export default MonFormulaire;
