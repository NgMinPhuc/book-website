import React from "react";
import "./Cart.css";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Step: 7 Calculate total price of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * parseFloat(item.price), 0); // Đảm bảo giá trị là số

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* Nếu giỏ hàng không có sản phẩm */}
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are added in Cart</h1>}

            {/* Hiển thị các sản phẩm trong giỏ hàng */}
            {CartItem.map((item) => {
              const productQty = parseFloat(item.price) * item.qty; // Đảm bảo giá trị là số

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt={item.name} />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${parseFloat(item.price).toFixed(2)} * {item.qty}
                      <span>${productQty.toFixed(2)}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* Điều khiển số lượng sản phẩm */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tính tổng giỏ hàng */}
          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className='d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice.toFixed(2)}</h3> {/* Hiển thị tổng tiền với 2 chữ số thập phân */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
