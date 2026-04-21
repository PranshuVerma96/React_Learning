// import React, { useState } from 'react';

// const App = () => {

// const [num, setnum] = useState(0)
// const [username, setusername] = useState()
// const [users, setusers] = useState(10,20 ,30)

//   return (
//     <div>
//       <h1>Hello world </h1>
//       <h1>value of a is {num}</h1>
//       <h2>my name is {username}</h2>
//       <h2>my array is {users}</h2>
//       <button onClick={()=>(setnum(num + 1), setusername('karan') , setusers([20,50, 60]))}>Click</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  // for increase value
  const increaseValue = () => {
    if (num === 15) {
      alert("the number is over then lemit");
    } else {
      setNum(num + 1);
    }
  };
  // for decrease value

  const decreaseValue = () => {
    if (num === -5) {
      alert("number is less than limit");
    } else {
      setNum(num - 1);
    }
  };

  return (
    <div className="parent">

      <div className="btn">
      <h1>Counter app</h1>
      <h2>your value is {num}</h2>
      <button className="button" onClick={increaseValue}>Increase</button>
      <button className="button" onClick={decreaseValue}>Decrease</button>
    </div>
    </div>
    
  );
};

export default App;
