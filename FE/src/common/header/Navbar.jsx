import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link to="/user">User Account</Link>
                </li>
              )}
              <li>
                <Link to="/exchange">Exchange Book</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
