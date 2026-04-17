import './App.css'

import React from 'react'
import Card from './components/Card'

const App = () => {
  const cardData = [
  {
    id: 1,
    age1: 29,
    age2: 45,
    name: "Pranshu Verma",
    location: "Mumbai, India",
    desc: "Frontend Developer passionate about React.",
    img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241"
  },
  {
    id: 2,
    age1: 25,
    age2: 40,
    name: "Rahul Sharma",
    location: "Delhi, India",
    desc: "Backend Developer (Node.js).",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
  },
  {
    id: 3,
    age1: 30,
    age2: 50,
    name: "Ankit Singh",
    location: "Lucknow, India",
    desc: "Full Stack Developer.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 4,
    age1: 28,
    age2: 42,
    name: "Neha Verma",
    location: "Noida, India",
    desc: "UI/UX Designer.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 5,
    age1: 32,
    age2: 48,
    name: "Aman Gupta",
    location: "Pune, India",
    desc: "React Developer.",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
  },
  {
    id: 6,
    age1: 27,
    age2: 39,
    name: "Priya Singh",
    location: "Jaipur, India",
    desc: "Frontend Developer.",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    id: 7,
    age1: 35,
    age2: 55,
    name: "Rohit Kumar",
    location: "Chandigarh, India",
    desc: "DevOps Engineer.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
  },
  {
    id: 8,
    age1: 26,
    age2: 38,
    name: "Sneha Kapoor",
    location: "Bangalore, India",
    desc: "Software Engineer.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    id: 9,
    age1: 31,
    age2: 47,
    name: "Vikas Yadav",
    location: "Hyderabad, India",
    desc: "MERN Stack Developer.",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    id: 10,
    age1: 29,
    age2: 44,
    name: "Karan Mehta",
    location: "Ahmedabad, India",
    desc: "JavaScript Developer.",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
  }
];
  return (
  <div className="container">
  {cardData.map((elem)=>(
    <Card key={elem.id} name={elem.name}
      location = {elem.location} dec = {elem.desc} logo ={elem.img}
    />
  ))}
  
</div>
  )
}

export default App
