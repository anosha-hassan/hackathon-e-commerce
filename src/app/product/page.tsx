'use client'


import Navbar from '@/app/Components/Navbar'
import ProductPage from '../Components/ProductRoute'
import RouteDescription from '../Components/RouteDescription'
import React from 'react'
import RouteProducts from '../Components/RouteProducts'
import Footer from '../Components/Footer'
import ProductRoute from '../Components/ProductRoute'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ProductRoute/>
      <RouteDescription/>
      <RouteProducts/>
      <Footer/>
    </div>

  )
}


export default page


