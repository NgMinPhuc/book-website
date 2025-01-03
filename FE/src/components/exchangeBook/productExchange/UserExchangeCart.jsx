import React, { useState } from "react";
import User from "./User1";

const ExchangeCart = ({ shopItems }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems && shopItems.length > 0 ? (
        shopItems.map((shopItem, index) => (
          <div className='box' key={index} onClick={() => handleProductClick(shopItem.id)}>
            <div className='productE'>
              <div className='product-content'>
                <div className='img'>
                  <img src={shopItem.cover} alt='' height='100%' width='200' />
                </div>
                <div className='product-details'>
                  <h3 className='label'>Name: <span className='content'>{shopItem.name}</span></h3>
                  <p className='label'>Author: <span className='content'>{shopItem.author}</span></p>
                  <p className='label'>Description: <span className='content'>{shopItem.description}</span></p>
                </div>
              </div>
              <div className='userEx'>
                <User />
              </div>
            </div>
            <div className='heading d_flex'>
              <div className='heading-right row '>
                <span>View all</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </>
  );
};

export default ExchangeCart;
