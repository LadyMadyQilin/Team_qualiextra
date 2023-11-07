import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ButtonBack from "../../components/ProviderComponents/ButtonBack/ButtonBack";
import AddServiceForm from "../../components/ProviderComponents/AddServiceForm/AddServiceForm";

const AddService = () => {
    return(
        <>
        <Header/>
        <main role="main" className="main">
        <ButtonBack/>
        <AddServiceForm/>



        </main>
        <Footer/>
        
        </>
    )
}
export default AddService;