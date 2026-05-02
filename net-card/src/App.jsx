 import React from 'react';
 import {NetflixSeries} from './components/NetfliexSeries.jsx'
//  import "./components/netflex.css"
import './components/Netflix.module.css';
import './components/EventHandling.jsx';
import { EventHandling } from './components/EventHandling.jsx';
import './components/EventProps.jsx'
import { EventProps } from './components/EventProps.jsx';
import { State } from './components/hooks/State.jsx';
import { DerivedState } from './components/hooks/DericedState.jsx';
import { ToggleSwitch } from './Projects/ToggleSwitch/Toggleswitch.jsx';
export const App = ()=>{
  
  return (
    <section className='container'>
    {/* // <h1 className='card-heading'>List of Best Netflix Series</h1> */}
       <NetflixSeries/> 
      {/* <EventHandling/>

    {/* //   <EventProps/> */}
{/* 
    <State/> */}
<DerivedState/> 
 <ToggleSwitch/>

    </section>

    
  
  )
}

