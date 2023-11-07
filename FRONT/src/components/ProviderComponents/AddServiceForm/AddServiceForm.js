import React, {useEffect} from 'react';
import './addserviceForm.scss';
import './addserviceForm.scss';
import AddServiceFormStore from './AddServiceFormStore';

const AddServiceForm = () => {
    const { postService, handleChange, data, getInstitutionsByProviderId, institutions } = AddServiceFormStore(state => state)
    

    useEffect(() => {
        
        getInstitutionsByProviderId();
    }, [getInstitutionsByProviderId]);

    return (
        <section className='addService'>
            <h2 className='addService__title'>Ajouter un service</h2>
            <form className='addService__form' method='POST'>
                <fieldset>
                    <label htmlFor="properties">Selectionnez l'établissement</label>
                    <select id="properties" name="institutionId" onChange={handleChange} required>
                        {institutions.map(institution => (
                            <option key={institution.id} value={institution.id} >
                                {institution.name_ins}
                            </option>
                            ))}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="photoS">Photos</label>
                    <input type="file" accept="image/*" id="photoS" name="photoS" ></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="name">Nom du service</label>
                    <input id='name' type='text' name='name_serv' onChange={handleChange} required></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="descriptionS">Description</label>
                    <textarea id="descriptionS" name="description_serv" onChange={handleChange} required></textarea>
                </fieldset>

                <button type='button' onClick={postService}>Créer</button>
            </form>
        </section>
    )
}
export default AddServiceForm;

