import React from "react"
import "./Home.css"
import SliderHome from "./Slider"
import Categories from "./Categories"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>

          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
