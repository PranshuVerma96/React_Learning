import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>This is my Product page </h1>
      <div className='flex justify-center gap-10 py-4'>
        <Link to='/product/men' >Man</Link>
        <Link to='/product/women' >Women</Link>
        <Link to='/product/kids' >Kids</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
