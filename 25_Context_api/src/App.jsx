import React from 'react'
import Counter from './components/Counter'
import { useContext } from 'react'
import { CounterContext } from './context/Counter'

const App = () => {
  const counterState = useContext(CounterContext);
  console.log('contentx' , counterState);
  
  return (
    <div>
      <h1>count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
