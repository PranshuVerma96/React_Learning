import React from 'react'

const Nabbar = (props) => {
  console.log(props);
  
  function changeTheme () {
    
    props.setTheme('dark');
    
  }
  return (
    <div>
    <p>{props.theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Nabbar
