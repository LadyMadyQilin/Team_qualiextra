import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Carrousel-top/Card/Card";
import SimpleMap from '../../components/Map/Map';
import Illustrations from "../../components/Illustrations/Illustration";
import Filtered from "../../components/Filtered/Filtered";
import SearchBar from "../../components/SearchBar/SearchBar";
import '../UserPages/MySearch.scss';

const MySearch = () => {
    return (
        <>
            <Header />
            <Filtered />

            <div className="MySearch__container">
                
                <div className="MySearch__cardContainer">
                    
                    <SearchBar />
                    
                    <h2 className="MySearch__title">Propositions</h2>

                    <div className="MySearch__card">

                        <Card style="card2" />
                        <Card style="card2" />
                        <Card style="card2" />
                        <Card style="card2" />
                    </div>

                </div>

                <SimpleMap className="MySearch__map" />
            </div>
            <Illustrations />
            <Footer />
        </>
    )
}

export default MySearch;