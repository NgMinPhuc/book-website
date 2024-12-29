import React, { useState } from "react"
import { Link } from "react-router-dom"
import Home from "../../pages/HomePageLayout"
import Exchange from "../../pages/ExchangePageLayout"
import User from "../../pages/UserProfilePageLayout"
import Contact from "../../pages/ContactPageLayout"

const routes = [
  { path: "/", name: "Home", element: <Home />, isMenu: true, isPrivate: false },
  { path: "/exchange", name: "Exchange Book", element: <Exchange />, isMenu: true, isPrivate: false },
  { path: "/user", name: "User Account", element: <User />, isMenu: false, isPrivate: false },
  { path: "/contact", name: "Contact", element: <Contact />, isMenu: true, isPrivate: true },
];

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>

          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {routes.filter(route => route.isMenu).map(route => (
                <li key={route.path}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;