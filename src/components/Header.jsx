import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";


const App = () => {
  const Home = () => <h1>home</h1>;
  const Articles = () => <h1>Articles</h1>;
  const Contact = () => <h1>Contact</h1>;
  const About = () => <h1>About</h1>;

  

  return (
    
    <div
      style={{ backgroundColor: "#202020", minHeight: "100vh", width: "100%" }}
    >
      <ReactNavbar
        color="#191919"
        logo="https://raw.githubusercontent.com/ss23094527/Listening/ae50434839e57e952c43384ee99304aabae36950/public/images/logo.svg"
        
        menu={[
          { name: "HOME", to: "/", component: Home },
          { name: "ARTICLES", to: "/articles", component: Articles },
          { name: "ABOUT US", to: "/about", component: About },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
        sticky
      />
    </div>
    
  );
};



export default App;