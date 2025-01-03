import React, { useState } from "react";
import Filter from "./Filter";
import ExchangeCart from "./ExchangeCart";
import UserExchange from "./UserExchangeCart";
import fakeShopItems from "./fakeExchangeItems";
import fakeUserExchange from "./fakeUserExchange";
import "./style.css";

const itemsPerPage = 5;

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
      <section className="shop background">
        <div className="container d_flex">
          <Filter />

          <div className="contentWidth">
            <div>
              <div className="heading-left row f_flex">
                <h2>Your Exchange</h2>
              </div>
              <div className="product-content">
                <UserExchange shopItems={fakeUserExchange} />
              </div>
            </div>
            <div>
              <div className="heading-left row f_flex">
                <h2>Other Exchange</h2>
              </div>
              <div className="product-content">
                <ExchangeCart shopItems={currentItems} />
              </div>
              <div className="pagination">
                <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0}>
                  &laquo;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(index)}
                    className={index === currentPage ? "active" : ""}
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
        </div>
      </section>
    </>
  );
};

export default Shop;
