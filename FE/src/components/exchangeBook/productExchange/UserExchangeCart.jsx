import React, { useState } from "react";

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
                <button className='action-btn' onClick={() => handleAction('Action 1')}>
                  <img src='./images/R.png' alt='avatar' className='avatar' height='30' width='30' />
                  Chuyện con mèo dạy hải âu bay
                </button>
                <button className='action-btn' onClick={() => handleAction('Action 2')}>
                  <img src='./images/R.png' alt='avatar' className='avatar' height='30' width='30' />
                  The Joy Luck Club
                </button>
                <button className='action-btn' onClick={() => handleAction('Action 3')}>
                  <img src='./images/R.png' alt='avatar' className='avatar' height='30' width='30' />
                  The Remains of the Day
                </button>
                <button className='action-btn' onClick={() => handleAction('Action 4')}>
                  <img src='./images/R.png' alt='avatar' className='avatar' height='30' width='30' />
                  Life of Pi
                </button>
                <button className='action-btn' onClick={() => handleAction('Action 5')}>
                  <img src='./images/R.png' alt='avatar' className='avatar' height='30' width='30' />
                  The Kite Runner
                </button>
                <button className='action-btn' onClick={() => handleAction('Action 5')}>...</button>
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
