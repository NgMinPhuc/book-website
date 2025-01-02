import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Search = ({ CartItem }) => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const logo = "/images/logo/logo.jpg";

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    const specificPages = ["/signin"];

    if (!specificPages.includes(window.location.pathname)) {
      search.classList.toggle("active", window.scrollY > 100);
    }
  });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (query.toLowerCase() === "harry potter") {
        history.push(`/shop&keyword=HarryPotter`);
      } else {
        history.push(`/search?query=${query}`);
      }
    }
  };

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='Logo' width='80' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input 
              type='text' 
              placeholder='Search and hit enter...' 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <div className='sign-in'>
              <Link to='/signin'>
                <i className='fa fa-sign-in icon-circle'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
