import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HeaderLayout from "./common/header/HeaderLayout"
import HomePageLayout from "./pages/HomePageLayout.jsx"
import Data from "./components/homepage/Data.js"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import UserTest from "./components/user/UserTest"
import TrackTest from "./components/track/trackTest.jsx"
import Contact from "./components/contact/ContactTest"
import Exchange from "./components/exchangeBook/Exchange.jsx"
import SignIn from "./components/login/SignIn.jsx"

function App() {
  
  const { productItems } = Data
  const [CartItem, setCartItem] = useState([])
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <HeaderLayout CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <HomePageLayout productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/user' exact>
            <UserTest />
          </Route>
          <Route path='/exchange' exact>
            <Exchange />
          </Route>
          <Route path='/track' exact>
            <TrackTest />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Route path='/signin' exact>
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App