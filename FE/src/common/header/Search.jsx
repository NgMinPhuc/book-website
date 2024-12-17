import React from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    const specificPages = ["/signin"];
  
    if (!specificPages.includes(window.location.pathname)) {
      search.classList.toggle("active", window.scrollY > 100);
    }
  })
  

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src='https://i.pinimg.com/736x/95/9f/a6/959fa64f3afa43d55c2d4e7bb27d340a.jpg' alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
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
  )
}

export default Search