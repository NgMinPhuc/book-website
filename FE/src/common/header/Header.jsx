import React from "react"

const Header = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 0123 456 789</label>
            <i className='fa fa-envelope'></i>
            <label> bookstore@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>About Me</label>
            <label>Need Help</label>
            <span>🇻🇳</span>
            <label>VN</label>
            <span>🇺🇸</span>
            <label>USA</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header