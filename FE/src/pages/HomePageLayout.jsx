import React from "react"
import Home from "../components/home/MainPage/Home"
import FlashDeals from "../components/home/flashDeals/FlashDeals"
import TopCate from "../components/home/top/TopCate"
import NewArrivals from "../components/home/newarrivals/NewArrivals"
import Discount from "../components/home/discount/Discount"
import Annocument from "../components/home/annoucement/Annocument"

import Wrapper from "../components/home/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem}) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages