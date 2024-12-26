import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import HeaderLayout from "./common/header/HeaderLayout";
import HomePageLayout from "./pages/HomePageLayout.jsx";
import Data from "./components/home/Data.js";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import User from "./pages/UserProfilePageLayout";
import Contact from "./pages/ContactPageLayout";
import Exchange from "./pages/ExchangePageLayout";
import SignIn from "./components/signin/SignIn.jsx";
import Signup from "./components/signin/Signup.jsx";

function App() {
  const { productItems } = Data;
  const [CartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)));
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)));
    }
  };

  const location = useLocation();

  return (
    <>
      <Router>
        <Switch>
        <Route path='/signin' exact>
            <SignIn />
          </Route>
          <Route path='/signup' exact>
            <Signup />
          </Route>
          <Route>
            {location.pathname !== '/signin' && <HeaderLayout CartItem={CartItem} />}
            <Switch>
              <Route path='/' exact>
                <HomePageLayout productItems={productItems} addToCart={addToCart} />
              </Route>
              <Route path='/cart' exact>
                <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
              </Route>
              <Route path='/user' exact>
                <User />
              </Route>
              <Route path='/exchange' exact>
                <Exchange />
              </Route>
              <Route path='/contact' exact>
                <Contact />
              </Route>
            </Switch>
            {location.pathname !== '/signin' && <Footer />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
