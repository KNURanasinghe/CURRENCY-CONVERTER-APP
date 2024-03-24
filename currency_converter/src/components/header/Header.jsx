import React, { useState } from 'react';
import logo from './logo.svg';
import './header.css';

const Menu = () => (
  <>
    <p><a href="#blog" className='active'>Home</a></p>
    <p><a href="#usdLkr">USD To LKR</a></p>
    <p><a href="#converter">Converter</a></p>
    <p><a href="#FindCurrency">Find Currencies</a></p>
  </>
);

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className='header'>
      <div className="header_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={clicked ? "header_nav-links" : "mobile"} id='header_nav-links' >
          <Menu />
        </div>
      </div>  
      <div className="header__sign">
        <p>SignIn</p>
        <button type="button">SignUp</button>
      </div>
      <div  id="mobile" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Header;
