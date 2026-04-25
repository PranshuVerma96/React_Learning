import { useState } from "react";
import React  from 'react';

const App = () => {
  const [title, setTitle] = useState('')
  const submitHandler = (elm)=>{
    elm.preventDefault()
    console.log('for submited ', title);
    setTitle('')
    
  }
  return (
    <div>
     <form onSubmit={ (elm) =>{
      submitHandler(elm)
     }}>
      <input type="text" 
       placeholder='Enter your name '
       value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
       />
      
      <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
