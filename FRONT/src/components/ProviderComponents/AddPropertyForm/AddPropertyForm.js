import ButtonBack from "../ButtonBack/ButtonBack"
import './addpropertyform.scss'
import  {AddPropertyStore}  from "./AddPropertyStore"

const AddPropertyForm = () => {
    const {postProperty, handleChange, data} = AddPropertyStore(state => state)
    console.log(data);
    return(
        <section className="addproperty">
        <h2 className="addproperty__title">Ajouter un établissement</h2>
        <ButtonBack/>
        <form className="addproperty__form" method="POST">
            <fieldset>
                <label htmlFor="nameProperty">Nom</label>
                <input id="nameProperty" name="name_ins" type='text' onChange={handleChange} required></input>
            </fieldset>
            <fieldset>
                <label htmlFor="addressProperty">Adresse de l'établissement</label>
                <input id="addressProperty" name="adress_ins" type="text" onChange={handleChange} required></input>
            </fieldset>
            <fieldset>
                <label htmlFor="cityProperty">Ville de l'établissement</label>
                <input id="cityProperty" name='city_ins' type='text' onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="cityCp">code postal de l'établissement</label>
                <input id="cityCp" name='cp_ins' type='text' onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="photosProperty">Photos de l'établissement</label>
                <input id="photosProperty" name="photosProperty" type="file" accept="image/*"></input>
            </fieldset>
            <fieldset>
                <label htmlFor="experiencesProperty">Expériences proposées</label>
                <input id="experiencesProperty" name="experiences" type="text" onChange={handleChange} required></input>
            </fieldset>
            <fieldset>
                <label htmlFor="priceProperty">Prix moyen des services proposés</label>
                <input id="priceProperty" name="average_price" type="number" onChange={handleChange} required></input>
            </fieldset>
            <fieldset>
                <label htmlFor="phoneProperty">Téléphone de l'établissement</label>
                <input id="phoneProperty" name="phone_ins" type="tel" onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="emailProperty">Email de l'établissement</label>
                <input id="emailProperty" name="email_ins" type="text" onChange={handleChange}></input>
            </fieldset>
            <button type="button" className="addproperty__buttonSubmit" onClick={ postProperty }>Créer</button>

        </form>

     </section>
    )
}
export default AddPropertyForm