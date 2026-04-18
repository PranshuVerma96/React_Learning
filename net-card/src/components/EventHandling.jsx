import './EV.css'
import React from 'react';
export const EventHandling = ()=>{
  // function handleButtonClick(){
  //   alert('hey I am a Event  ')
  // }

  const handleButtonClick = (event)=>{
    // console.log(event);
    // console.log(event.target);
    
    
    alert('hello I am ');

  
  }
  
  const handleWelcomeUser = (user)=>
  {
    console.log(`welcome to my react series ${user}`);
    
  }
  return(
    <>
    {/* function componets with Named functions */}
    <button onClick={handleButtonClick}>click-Me</button><br />

      <button onClick={ ()=> handleButtonClick()}>click-Me-2</button>
      <br />

      <button onClick={(event)=>console.log(event)}>Inline</button>

      {/* function componnets with Inline arrow functions */}

<br />
      <button onClick={()=>alert('hellow')}>arrow</button>

      {/* passing Arguments to Event Handlers */}
      <br />0
      {/* <button onClick={handleWelcomeUser}>welcome</button> */}

          <button onClick={()=>handleWelcomeUser('pranshu')}>welcome</button>
             <button onClick={()=>handleWelcomeUser('pranshu sandesh')}>welcome</button>
    </>
  );
};