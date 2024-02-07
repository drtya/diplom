import React from 'react'
import Home from '../../layouts/Home/Home'
import About from '../../layouts/About/About'
import Course from '../../layouts/Course/Course'
import Feedback from '../../layouts/Feedback/Feedback'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'

const Main = () => {
  return (
    <>
      <Home />
      <div className='empty_place'></div>
      <About />
      <div className='empty_place'></div>
      <Course />
      <div className='empty_place'></div>
      <Feedback />
      <div className='empty_place'></div>

    </>
  )
}

export default Main