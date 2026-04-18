export const State = ()=>{
  let value = 0;
  const HandleButtonClick = () =>{
    value++;
    console.log(value);
    
  }
  return (
    <>
    <h1></h1>
      <button onClick={HandleButtonClick}></button>
    </>
  )
}