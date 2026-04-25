import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesData = () => {
 const parms =  useParams();
 
 
  return (
    <div>
      <h1>{parms.id}there are courses Data available for the student</h1>
    </div>
  )
}

export default CoursesData
