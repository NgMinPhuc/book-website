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
import Shop from "./components/productView/productShops/Shop.jsx";
import ProductDetail from "./components/productView/productDetail/ProductDetailPage.jsx";

function App() {
  const { productItems } = Data;
  const [CartItem, setCartItem] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
            <SignIn setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path='/signup' exact>
            <Signup />
          </Route>
          <Route>
            {(location.pathname !== '/signin' || location.pathname !== '/signup' ) && <HeaderLayout CartItem={CartItem} isAuthenticated={isAuthenticated} />}
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
              <Route path='/shop&keyword=HarryPotter' exact>
                <Shop addToCart={addToCart} shopItems={productItems} />
              </Route>
              <Route path='/product/:id' exact>
                <ProductDetail />
              </Route>
            </Switch>
            {(location.pathname !== '/signin' || location.pathname !== '/signup' ) && <Footer />}
          </Route>
        </Switch>
      </Router>
    </>
  //   <div>
  //   <ProductDetailPage />
  // </div>
  );
}

export default App;