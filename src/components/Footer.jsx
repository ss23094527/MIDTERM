import './styles/Footerstyle.css';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-up ">
                <div className=" subscribe ">
                    <h4 className="subscribe-title">GET OUR NEWSLETTER</h4>
                    <p className="subscribe-subtitle">Sign up now for designs and inspiration.</p>
                    <div className="subscribe-box">
                        <div className="subscribe-email">
                            <input type="search" id="search" placeholder="Enter Your Email" />
                        </div>
                        <div className=" div-subscribe-btn ">
                            <button  type="button" className="subscribe-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" footer-container" style={{ display:"flex", justifyContent:"center"}}>
                <div className="footer-down">
                        <div className="your-home footer-container">
                            <h4 className="header-title" style={{ margin:"0" }}>TRANCE</h4>
                            <p className="header-title">have a nice day.</p>   

                        </div>
                        <div className=" footer-container  footer-down-right">
                            <div className="icons ">
                                <img alt="" className="footer-icon" src="https://raw.githubusercontent.com/shakuneko/icon/master/instergram.png"/>
                                <img alt="" className="footer-icon" src="https://raw.githubusercontent.com/shakuneko/icon/master/fb.png"/>
                                <img alt="" className="footer-icon" src="https://raw.githubusercontent.com/shakuneko/icon/master/twitter.png"/> 
                                <img alt="" className="footer-icon" src="https://raw.githubusercontent.com/shakuneko/icon/master/pinterest.png"/> 
                            </div> 
                            <div className=" icons ">
                                <div className="footer-options">
                                    <ul className="footer-about">
                                        <li style={{marginBottom:"0.5rem"}} className="options-title">ABOUT</li>
                                        <li className="options"></li>
                                        <li className="options">About Us</li>
                                        <li className="options">Newsletter</li>
                                        <li className="options">Wholesale Program</li>
                                        <li className="options">Trade Program</li>
                                    </ul>
                                    <ul className="footer-help">
                                        <li style={{marginBottom:"0.5rem"}} className="options-title">HELP</li>
                                        <li className="options">Track My Order</li>
                                        <li className="options">Return My Order</li>
                                        <li className="options">Contact Us</li>
                                    </ul>
                                    <ul className="footer-shop">
                                        <li style={{marginBottom:"0.5rem"}}className="options-title">SHOP</li>
                                        <li className="options">Clock</li>
                                        <li className="options">Chair</li>
                                        <li className="options">Table</li>
                                        <li className="options">Light</li>
                                        <li className="options">Book Shelf</li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                        <div style={{ width:"100%", display:"flex", justifyContent:"center", flexDirection:"column" }}>
                            <hr className=" footer-line "/> 
                            <p className=" copyright ">Copyright © 2023 TRANCE All Rights Reserved.</p>
                        </div>


   
                </div>
                
            </div>
        </footer> 
        
         
    );
}