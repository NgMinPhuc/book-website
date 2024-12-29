import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div>
                <img src={val.cover} alt='' height="200" />
              </div>
              <h4>{val.name}</h4>
              <span>{val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
