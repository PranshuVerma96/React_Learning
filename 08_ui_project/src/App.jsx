import React from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {
  const users = [
    {
      img : 'https://plus.unsplash.com/premium_photo-1720287601013-69bed792f481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag :'Satisfied'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1774271481336-845c3a07f690?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag :'UnderServed'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1769143714924-1d3a85cf335e?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag :'Underbanked'
    },

     {
      img : 'https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag :'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users = {users}/>
      <Section2 />
    </div>

  );
}

export default App;
