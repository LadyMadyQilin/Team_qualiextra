import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridChoice from "../../components/GridChoice/GridChoice";
import PackageText from "../../components/PackageInfo/PackageText/PackageText";
import SimpleMap from "../../components/Map/Map";
import PackagePictures from "../../components/PackageInfo/PackagePictures";
import Filtered from "../../components/Filtered/Filtered";
import '../UserPages/PackageHome.scss';

const PackageHome = () => {
    return (
        <>
            <Header />
            <Filtered />
            <div className="PicMap__container">
                <PackagePictures />
                <SimpleMap />
            </div>
            <div className="GridChoice__container">
                <PackageText />
                <GridChoice />
            </div>

            <Footer />
        </>
    )
}

export default PackageHome;