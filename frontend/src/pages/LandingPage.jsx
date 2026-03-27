import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <Categories></Categories>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
