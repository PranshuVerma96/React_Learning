import React from 'react'

import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    jobTitle: "Frontend Developer",
    jobType: "Full Time",
    salary: "$40/hr",
    level : "Senior Level",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://diplo-media.s3.eu-central-1.amazonaws.com/Microsoft-Logo-HD.jpg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    jobTitle: "Backend Developer",
    jobType: "Full Time",
    salary: "$45/hr",
     level : "Senior Level",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://media.wired.com/photos/5a99ba72927dc94e67685b9b/191:100/w_1280,c_limit/amazon-a-logo.jpg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    jobTitle: "Software Engineer",
    jobType: "Full Time",
     level : "Junior Level",
    salary: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez1McrNMsAAXCEyFxpBq-TMyzkYZ7fe1S-w&s",
    companyName: "Meta",
    datePosted: "3 days ago",
    jobTitle: "React Developer",
    jobType: "Part Time",
    salary: "$35/hr",
     level : "Junior Level",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://pbs.twimg.com/profile_images/1892248257516224513/SzZdRSkx.png",
    companyName: "Apple",
    datePosted: "10 days ago",
    jobTitle: "iOS Developer",
    jobType: "Full Time",
    salary: "$55/hr",
     level : "Junior Level",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    jobTitle: "UI Engineer",
    jobType: "Full Time",
    salary: "$60/hr",
     level : "Mid Level",
    location: "Remote"
  },
  {
    brandLogo: "https://media.licdn.com/dms/image/v2/D560BAQHilaKdJueUVg/company-logo_200_200/B56ZodIp56HUAM-/0/1761425400480?e=2147483647&v=beta&t=-tNun5V2BRDck_2umtf0ZcPnEoaTicnbr3RnWud4Eag",
    companyName: "Adobe",
    datePosted: "6 days ago",
    jobTitle: "Frontend Engineer",
    jobType: "Full Time",
    salary: "$42/hr",
      level : "Mid Level",
    location: "Noida, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-photo/3d-render-uber-logo-glossy-translucent-black-floating-sleek-45-degree-angle-neon-white-out_1020495-781520.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Uber",
    datePosted: "2 days ago",
    jobTitle: "Full Stack Developer",
    jobType: "Full Time",
    salary: "$48/hr",
      level : "Senior Level",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujOkdW7NbL4MGxKaqcyXe-N5_T_TaXBNc5w&s",
    companyName: "Airbnb",
    datePosted: "3 weeks ago",
    jobTitle: "Software Developer",
    jobType: "Part Time",
      level : "Senior Level",
    salary: "$38/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "1 month ago",
    jobTitle: "Backend Engineer",
    jobType: "Full Time",
    salary: "$52/hr",
      level : "Senior Level",
    location: "Bangalore, India"
  }
];


  return (
    <div className='parent'>
   {jobOpenings.map((elem,idx)=>{
      return (
        <div key = {idx}>
          <Card companyName = {elem.companyName} post = {elem.jobTitle} tag1 = {elem.jobType} 
        tag2 = {elem.level} date ={elem.datePosted}
        salary = {elem.salary} location = {elem.location} logo = {elem.brandLogo}
      />
        </div>
      )
   })}
    </div>
  )
}

export default App
