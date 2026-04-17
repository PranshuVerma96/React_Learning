import React from 'react'

const Card = (props) => {
  return (
   <>
    <div className='parent'>
   <div className='subparent'>
     <div className='top'>
      <div className='tag'>29 <br /><span className='span'>years</span></div>
      <div className='img'><img src={props.logo} alt="" /></div>
      <div className='tag'>45<br /><span>years</span></div>
    </div>
      
      <div className="center">
        <div className='mid'>
         <h2>{props.name}</h2>
         <span>{props.location}</span>
         <p>{props.dec}</p>
        </div>
      </div>
      <div className="bottom">
        <button>Apply Now</button>
      </div>
   </div>
    </div>
   </>
  )
}

export default Card
