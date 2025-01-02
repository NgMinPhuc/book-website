import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ExchangeCart = ({ shopItems }) => {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const increment = () => {
    setCount(count + 1);
  };

  const handleProductClick = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <>
      {shopItems && shopItems.length > 0 ? (
        shopItems.map((shopItem, index) => (
          <div className='box' key={index} onClick={() => handleProductClick(shopItem.id)}>
            <div className='productE'>
            <div className='product-content'>
                <div className='img'>
                  <span className='discount'>{shopItem.discount}% Off</span>
                  <img src={shopItem.cover} alt='' height='100%' width='200' />
                </div>
                <div className='product-details'>
                  <h3 className='label'>Name: <span className='content'>{shopItem.name}</span></h3>
                  <p className='label'>Author: <span className='content'>{shopItem.author}</span></p>
                  <p className='label'>Description: <span className='content'>{shopItem.description}</span></p>
                </div>
              </div>
              <div className='userEx'>
                <button className='action-btn' onClick={() => handleAction('Action 1')}>Action 1</button>
                <button className='action-btn' onClick={() => handleAction('Action 2')}>Action 2</button>
                <button className='action-btn' onClick={() => handleAction('Action 3')}>Action 3</button>
                <button className='action-btn' onClick={() => handleAction('Action 4')}>Action 4</button>
                <button className='action-btn' onClick={() => handleAction('Action 5')}>Action 5</button>
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
