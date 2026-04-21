// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState([10, 20, 30]);
//   const [user, setuser] = useState({name : 'rishi' , age : 20})
//   const btnclick = () => {
//     const newNum = [...num];
//     newNum.push(99);
//     setnum(newNum);
// setuser(num => ({...num, age :50}))
  
//   };

//   return (
//     <div>
//       <h1>{user.name} , age is {user.age}</h1>
//       <h2>array is {num}</h2>
//       <button onClick={btnclick}> click</button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState([10, 20, 30]);

const addNumInList = () =>{
setNum(pre => [... pre ,56])
}

const delNumInList = () => {
  setNum(pre => pre.slice(0,-1))
}
  return (
    <div>
      <h2>{num}</h2>

      <button onClick={addNumInList}>Add</button>
      <button onClick={delNumInList}>Remove</button>
    </div>
  );
};

export default App;