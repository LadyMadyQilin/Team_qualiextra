
import eyeClose from "../../../assets/eye_close.svg";
import { useSignUpStore } from './signUpStore';

const SignUp = () => {
    const {postSignUp, handleChange, data} = useSignUpStore(state => state)
    
    console.log(data);

    
    return (
        <section className="auth__bloc" >


            <div className="auth__title__container">
                <h2 className="auth__title">
                    <span className="auth__title__color">Créer</span> un compte
                </h2>
            </div>

            <form action="POST">

                <div className="auth__name__container">
                    <div className="auth__firstname__container">
                        <label className="auth__label" htmlFor="lastname">Nom*</label>
                        <input className="auth__input" type="text" name="lastname" id="lastname" onChange={handleChange} />
                    </div>

                    <div className="auth__lastname__container">
                        <label className="auth__label" htmlFor="lastname">Prénom*</label>
                        <input className="auth__input" type="text" name="firstname" id="firstname" onChange={handleChange}/>
                    </div>
                </div>

                <div className="auth__info__container">
                    <label className="auth__label" htmlFor="email">Adresse mail*</label>
                    <input className="auth__input" type="text" name="email" id="email" onChange={handleChange}/>


                    <label className="auth__label" htmlFor="password">Mot de passe*</label>
                    <div className="auth__password">
                        <input className="auth__input" type="password" name="password" id="password" onChange={handleChange}/>
                        <a><img src={eyeClose} className="auth__password__logo"></img></a>
                    </div>

                    <label className="auth__label" htmlFor="phone_user" >Télephone</label>
                    <input className="auth__input" type="tel" name="phone_user" id="phone_user" onChange={handleChange}/>
                </div>

                <div className="auth__radio__container">

                    <div className="auth__radio">

                        <div className="auth__radio__container">
                            <input type="checkbox" name="informations" id="informations1" />
                            <label className="auth__radio__title" htmlFor="informations1">
                                * J'ai lu et accepté les <span className="auth__radio__subtitle">conditions d'utilisation</span> de QualiExtra
                            </label>
                        </div>

                        <div className="auth__radio__container">
                            <input type="checkbox" name="informations" id="informations2" />
                            <label className="auth__radio__title" htmlFor="informations2">
                                * Je veux être tenu(e) informé(e) des nouvelles de QualiExtra
                            </label>
                        </div>

                    </div>

                    <div className="auth__button__container">
                        <button className="auth__button" type="button"   onClick={ postSignUp }>Suivant</button>
                    </div>
                </div>
            </form>

        </section>
    )
}
export default SignUp;