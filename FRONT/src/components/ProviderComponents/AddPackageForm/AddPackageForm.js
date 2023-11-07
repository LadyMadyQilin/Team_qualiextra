import React from 'react'
import './addPackageFrom.scss'
import AddPackageFormStore from './AddPackageStore'

const AddPackageForm = () => {
    const {postPackage, handleChange, data} = AddPackageFormStore(state => state)
    console.log(data);
    return (
        <section className='addPackage'>
            <h2>Ajouter un service</h2>
            <form method='POST' className='addPackage__form'>
                <fieldset>
                    <legend>Selectionnez le ou les services</legend>
                    <div>
                        <input type="checkbox" id="service1" name="services" value="1" onChange={handleChange}></input>
                            <label htmlFor="service1">Service 1</label>
                    </div>
                    <div>
                        <input type="checkbox" id="service2" name="services" value="2" onChange={handleChange}></input>
                            <label htmlFor="service2">Service 2</label>
                    </div>
                </fieldset>
                <fieldset>
                    <label  htmlFor="quantityP">Quantité de package</label>
                    <input type='number' onChange={handleChange} required></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="priceP">Prix du package</label>
                    <input type="number" id="priceP" name="priceP" onChange={handleChange} required></input>
                </fieldset>
                <fieldset>
                    <legend>Disponibilités</legend>
                    <div className='addService__boxDispo'>
                        <label htmlFor="startS">Début</label>
                        <input type="date" id="startS" name="startS" onChange={handleChange} ></input>
                    </div>
                    <div className='addService__boxDispo'>
                        <label htmlFor="endS">fin</label>
                        <input type="date" id="endS" name="endS" onChange={handleChange}></input>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Horaires</legend>
                    <div className='addService__boxDispo'>
                        <label htmlFor="startT">Heure de début</label>
                        <input type="time" id="startT" name="startT" onChange={handleChange}></input >
                    </div>
                    <div className='addService__boxDispo'>
                        <label htmlFor="endT">Heure de fin</label>
                        <input type="time" id="endT" name="endT" onChange={handleChange}></input>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Choisissez la categorie</legend>
                    <input type='checkbox' onChange={handleChange}></input>
                    <label>Ephemere</label>
                    <input type='checkbox' onChange={handleChange}></input>
                    <label>Cozy</label>
                    <input type='checkbox' onChange={handleChange}></input>
                    <label>Insolite</label>

                </fieldset>
                <fieldset>
                    <label htmlFor="limit">Limite de convive</label>
                    <input type="text" id="limit" name="limit" onChange={handleChange}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="extras">Ajouter des extras</label>
                    <input type="text" id="extras" name="extras" onChange={handleChange}></input>
                </fieldset>
                <button type='button' onClick={postPackage}>Valider</button>
            </form>
        </section>
    )
}
export default AddPackageForm