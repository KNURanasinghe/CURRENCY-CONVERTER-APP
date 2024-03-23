import React, { useState } from 'react';
import './header.css';



const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);


  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className='header'>
      <div className="navbar">
      
      <div className="logo" onClick={() => console.log('Logo clicked')}>
        Logo
      </div>
      <div className="title">Currency Converter</div>
      <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Menu
        {showMenu && (
          <div className="dropdown">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </div>
      <div className="login-signin">
        <button onClick={() => console.log('Login clicked')}>Login</button>
        <button onClick={() => console.log('Signin clicked')}>Signin</button>
      </div>
     
    </div>
    </div>
  );
};

export default NavigationBar;
