import React from 'react';

const App = () => {
  function btnClicked(val){
    console.log('hello gys ' ,val);
    
  }
  return (
    <div>
      <h1> hello Guys</h1>
     <input onChange={(elm)=>{
  btnClicked(elm.target.valu)
     } } type="text" placeholder='Enter name ' />
    </div>
  );
}

export default App;
