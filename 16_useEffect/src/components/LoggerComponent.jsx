import React ,{useEffect , useState}from 'react'

const LoggerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('now it is run on every render')
    
  })
  
  // runs on every render
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => (setCount(count + 1 ))}>Incremet</button>
    </div>
  )
}

export default LoggerComponent
