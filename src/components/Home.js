import React from 'react'
import Header from './Header'
import { Routes, Route } from "react-router-dom";
import Products from './Products';
import CheckoutPage from './CheckoutPage';
import Footer from './Footer';



const Home = ({carrito, deleteCarrito, addCarrito, setSesionStatus}) => {
  return (
    <div className='h-screen'>
      <Header setSesionStatus={setSesionStatus} carrito={carrito}/>
      <Routes>
        <Route path="/" element={<Products addCarrito={addCarrito} />} />
        <Route
          path="/checkout-page"
          element={
            <CheckoutPage carrito={carrito} deleteCarrito={deleteCarrito} />
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default Home
