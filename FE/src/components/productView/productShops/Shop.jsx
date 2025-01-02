import React, { useState } from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import fakeShopItems from "./fakeShopItems";
import "./style.css";

const itemsPerPage = 9;

const Shop = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = fakeShopItems.slice(offset, offset + itemsPerPage);
  const totalPages = Math.ceil(fakeShopItems.length / itemsPerPage);

  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Harry Potter Books</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={currentItems} />
            </div>
            <div className='pagination'>
              <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0}>
                &laquo;
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index)}
                  className={index === currentPage ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
