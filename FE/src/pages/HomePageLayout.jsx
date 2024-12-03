import React from "react"
import Home from "../components/homepage/MainPage/Home"
import FlashDeals from "../components/homepage/flashDeals/FlashDeals"
import TopCate from "../components/homepage/top/TopCate"
import NewArrivals from "../components/homepage/newarrivals/NewArrivals"
import Discount from "../components/homepage/discount/Discount"
import Annocument from "../components/homepage/annocument/Annocument"
import Wrapper from "../components/homepage/wrapper/Wrapper"

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