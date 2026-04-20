import { useState } from "react"
function App() {
  const[count,setCount] = useState(0);
  const AddRatting = ()=>{
    if(count==20){
      alert(`sorry you has reached your limit =${count}`)
    }else
    setCount(count+1)
  }

  const SubRatting = ()=>{
    if(count==0){
      alert(`sorry now you are not decreasing ${count}`)
    }else
    setCount(count-1)
  }
  return (
    <>
    <div className="main-div">
      <h1 className="first-heading">Welcome To Page</h1>
      <h2 className="ratting">Please give me your feedback : {count}</h2>
      <button className="btn" onClick={AddRatting}>Increase</button>
      <br />
      <button className="btn" onClick={SubRatting} >Decrease</button>

      </div>
    </>
  )
}

export default App
