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
    // Tìm sản phẩm đã tồn tại trong giỏ dựa trên `name` và `price`
    const productExit = CartItem.find(
      (item) => item.name === product.name && item.price === product.price
    );
  
    if (productExit) {
      // Nếu sản phẩm đã có, tăng số lượng và tính lại giá trị tổng
      setCartItem(
        CartItem.map((item) =>
          item.name === product.name && item.price === product.price
            ? {
                ...item,
                qty: item.qty + 1,
                totalPrice: (item.qty + 1) * parseFloat(item.price),
              }
            : item
        )
      );
    } else {
      // Nếu sản phẩm chưa có, thêm mới sản phẩm vào giỏ hàng
      const newProduct = {
        ...product,
        qty: 1,
        totalPrice: parseFloat(product.price),
      };
      setCartItem([...CartItem, newProduct]);
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

  const removeFromCart = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id)); // Lọc bỏ sản phẩm khỏi giỏ
  };
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
                <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeFromCart={removeFromCart} />
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
  <ProductDetail addToCart={addToCart} />
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