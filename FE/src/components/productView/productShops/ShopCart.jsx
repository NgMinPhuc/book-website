import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems && shopItems.length > 0 ? (
        shopItems.map((shopItem, index) => (
          <div className='box' key={index}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItem.discount}% Off</span>
                <img src={shopItem.cover} alt='' height='450' width='100%' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3 className='label'>Name: <span className='content'>{shopItem.name}</span></h3>
                <p className='label'>Author: <span className='content'>{shopItem.author}</span></p>
                <p className='label'>Description: <span className='content'>{shopItem.description}</span></p>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>{shopItem.price}.000</h4>
                  <button onClick={() => addToCart(shopItem)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
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

export default ShopCart;