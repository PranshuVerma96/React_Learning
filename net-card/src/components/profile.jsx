function Profile(){
  return(
    <div>
      <h1>Profile Card Challenge</h1>

      <ProfileCard
      name = "Pranshu"
      age = {90}
      greeting = {
        <div>
          <strong>Hi Alic, have a wonderful day !</strong>
        </div>
      }
      >

        <p>Hobies :Reading . hinking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
      name ="bob"
      age ={45}

        greeting = {
        <div>
          <strong>Hi Alic, have a wonderful day !</strong>
        </div>
      }
      >

         <p>Hobies :Reading . hinking</p>
        <button>Contact</button>
      </ProfileCard>
         
    </div>
  )
}
export default Profile;

function ProfileCard(props){
return(
  <>
<h2>Name : {props.name}</h2>
<p>Age : {props.age}</p>
<p>{props.greeting}</p>
<div>{props.children}</div>
  </>
)
}