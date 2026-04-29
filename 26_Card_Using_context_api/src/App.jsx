import React from 'react'
import Item from './assets/components/Item'
import Cart from './assets/components/Cart'

const App = () => {
  return (
    <div>
      <Item name="MacBook Prp" price = {1000000} />
      <Item name="Pen Drive" price = {1000} />
      <Item name="Mobile" price = {2000} />
      <Cart />
    </div>
  )
}

export default App
