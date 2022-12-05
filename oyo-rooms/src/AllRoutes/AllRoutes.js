import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Checkout from '../Pages/Checkout'
import HotelDetails from '../Pages/HotelDetails'
import Payment from '../Pages/Payment'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/' element={<HotelDetails />}></Route>
    </Routes>
  )
}

export default AllRoutes