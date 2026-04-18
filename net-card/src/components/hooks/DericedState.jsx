import React, { useState } from "react";



export const DerivedState = ()=>{

  const [users , setUsers] = useState([
      {name : 'Alice' , Age:25},
  {name : 'Bob' , Age:30},
  {name : 'charlie' , Age :35},
  {name : 'Angles' , Age :45},]);

  return (
    <div className="main-div" >
      <h1>User List</h1>
      <ul>
        {
          users.map((curElem , index)=>{
            return<>
              <li key={index}>
                {curElem.name} - {curElem.Age} year old
              </li>
            </>
          })
        }
      </ul>
    </div>
  )
}