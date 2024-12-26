import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>BokkStore</h1>
            <p>5th Floor, 387-389 Hai Ba Trung, District 3, Ho Chi Minh City, Ho Chi Minh City Book Publishing Joint Stock Company - BOKK60 - 62 Le Loi, District 1, City. HCM, Vietnam. Bokk.com accepts online orders and delivers to your door. Do not support ordering and receiving goods directly at the office as well as all Bokk Systems nationwide.
            </p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>60-62 Lê Lợi, Q.1, TP. HCM </li>
              <li>Email: cskh@Bokk.com.vn</li>
              <li>Phone: 1900636467</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer