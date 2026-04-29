import React, { createContext,useState } from 'react'

const CartContext = createContext(null)
const CartProvider = (props) => {
  const [item, setItem] = useState([])
  return (
    <div>
      <CartContex.Provider value={item ,setItem}>
{props.children}
      </CartContex.Provider>

    </div>
  )
}

export default CartProvider
