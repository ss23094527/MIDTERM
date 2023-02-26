
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "../components/Homecontent/HomeContent";
import '.././index.css';

function Home() {
    return (
        <div className="main-layout">

            <div className="layout-header">
                <Header />
              
                <div className="layout-content">
                    <HomeContent />
                </div>

                {/* <div className="layout-footer">
                    <div />
                    <Footer />
                </div> */}
                

            </div>
        </div>
    );
}

export default Home