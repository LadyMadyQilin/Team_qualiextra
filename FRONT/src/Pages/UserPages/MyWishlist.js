import Header from "../../components/Header/Header"
import Card from "../../components/Carrousel-top/Card/Card"

import './myWishlist.scss'
import Footer from "../../components/Footer/Footer"
const MyWishlist = () => {
    return(
        <>
        <Header isLoggedIn={true}/>
        <main role="main">
        <section className="myWishlist">
            <div className="myWishlist__boxTitle">
            <h2 className="myWishlist__title">Mes Services Favoris</h2>
            </div>
            <div className="myWishlist__boxCards" >
                <Card style="card2"/>
                <Card style="card2"/>
                <Card style="card2"/>
                <Card style="card2"/>
                <Card style="card2"/>
                <Card style="card2"/>
                <Card style="card2"/>
                <Card style="card2"/>
                
            </div>
        </section>

        </main>
        <Footer/>
        </>
    )
}
export default MyWishlist