import React, { createContext,useState } from 'react'

export const CounterContext = createContext(null);

const CounterProvider = (props) => {
  const [count, setCount] = useState(10)
  return (
    <div>
      <CounterContext.Provider value={{count,setCount}}>
      {props.children}
      </CounterContext.Provider>
    </div>
  )
}

export default CounterProvider
