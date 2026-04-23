// import {useEffect,useState} from 'react';

import LoggerComponent from "./components/LoggerComponent";
import TimerComponent from "./components/TimerComponent";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [total , setTotal] = useState(1);

  // first  -> side effect function
  // second -> clean-up function 
  // third -> comma separated dep list

  // varation : 1
  // runs on every render
  // useEffect(() => {
  //   alert('I will run on each render')
  // })

  // varation - 2
  // that runs on only first render 

  // useEffect(() => {
  //   alert('I will on only first render');
  // }, [])

  // varation - 3

  // useEffect(() => {
  //   alert('I will run every time when count is updated');
  // }, [count])

  // varation - 4 

  //multiple dependencies

  // useEffect(() => {
  //   alert('I will run when count and total is updated');
  //   }, [count , total])
    

  // varation - 5
  // is bar let's add cleanup function 

  // useEffect(() => {
  //   alert('count is updated ')
  
  //   return () => {
  //     alert('count is unmounted from UI')
  //   }
  // }, [count])
  
  
  // const handleClick = () => {
  //    setCount(count + 1)
    
  // }
  // const updateTotal = () =>{
  //      setTotal(total + 2)
  // }
  return (
    
    // <div>
    // //   <button onClick={handleClick}>update count</button>
    // //   <br />
    // //   <h1>Count is : {count}</h1>

    // //    <button onClick={updateTotal}>update total </button>
    // //    <br />
    // //   <h1>total is : {total}</h1>
    // {/* // </div> */}
    <>
{/* <LoggerComponent /> */}
<TimerComponent />
    </>
  );
}

export default App;
