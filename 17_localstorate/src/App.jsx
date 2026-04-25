

const App = () => {

//localStorage.setItem('user' , 'pranshu' )
//   localStorage.setItem('age' , '23')
//   const age = localStorage.getItem('age')
//   console.log(age);
//  const uers =  localStorage.getItem('user');
//  console.log(uers);
// localStorage.removeItem('age')

const user = {
  username : 'pranshu',
  age : 30,
  city : 'bopal'
}
console.log(user);
localStorage.setItem('user' , JSON.stringify(user))



const users = localStorage.getItem('user')
console.log(users);


 
  return (
    <div>
     
    </div>
  )
}

export default App
