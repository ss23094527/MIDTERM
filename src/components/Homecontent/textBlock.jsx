import Footer from '../Footer';
import './styles/Parallax.css';

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">Listening</h1>
                <p id="textblock-content">
                還沒想好<br/><br/>
                BLABLABLA
                </p>
               
            </div>
            <div className="layout-footer">
                    <div />
                    <Footer />
                </div>
        </div>

        
    );   
}

export default TextBlock;