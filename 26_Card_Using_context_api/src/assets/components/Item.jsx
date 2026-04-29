import React, { useContext } from 'react'

const Item = (props) => {
  const cart = useContext(CartContxt)
  return (
    <div className=''>
      <h4>{props.name}</h4>
      <p> Price : ${props.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default Item
