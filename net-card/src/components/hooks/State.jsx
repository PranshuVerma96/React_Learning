import React from "react";
import { useState } from "react";
export const State = ()=>{
  // let value = 0;
  // const handleButtonClick= ()=>{
  //   value++;
  //   console.log(value);
 let[count, setCount] = useState(0);

    const handleButtonClick = ()=>{
      setCount(()=>count +1)
    }
  

  return (
    <>
    <div className="main-div">
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComp/>
    </>
  )
};
function ChildComp(){
  console.log("child component rendered");
  return <div>
  <h2> Child Component</h2>
   
  </div>
  
}