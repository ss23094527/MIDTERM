// App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";


// The function that toggles between themes
function Darklight() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        
        <button className='darklight' onClick={toggleTheme}>
            <BsFillMoonStarsFill/>/<BsFillSunFill />
        </button>
     
        
      </>
    </ThemeProvider>
  );
}

export default Darklight;