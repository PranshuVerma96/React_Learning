import React from "react";
export const EventProps = ()=>{

  const HandleWelcomeUser=(user)=>{
    alert(`hey ${user}`);
  };

  const handleHover = (user)=>{
    alert(`hello know me ${user}`)
  }
  return(
    <>
<WelcomeUser 
onClick={()=>HandleWelcomeUser('pranshu')} 
  onMouseEnter ={handleHover}
/>

    </>
  )
}

const WelcomeUser = (props)=>{

  const handleGreeting = ()=>{
    console.log(`hey how are you`);
    props.onClick();
    
  }
  return(
    <>
   <button onClick={props.onClick}>click</button>
   <button onMouseEnter= {props.onMouseEnter}>Hover me</button>
   <button onClick={handleGreeting}>Greeting</button>
   
    </>
  )
}