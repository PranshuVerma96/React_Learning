import React,{useState , useEffect} from 'react'

const TimerComponent = () => {

  useEffect(() => {
    const intervalId = setInterval(()=>{
      alert('that is run when sate update')
      
      setSeconds (prevSecond => prevSecond + 1)
    },1000 )
  
    return () => {
      console.log('Time to stop');
      
      clearInterval(intervalId)
      
    }
  }, [])
  // it will rund only on first render

  const [seconds, setSeconds] = useState(0)
  return (
    <div>
      <h1>Seconds : {seconds}</h1>
    </div>
  )
}

export default TimerComponent
