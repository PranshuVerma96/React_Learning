import React from 'react';
import { useState } from 'react';
import Nabbar from './components/Nabbar';

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>Theme is {theme} </h1>
      <Nabbar theme = {theme} setTheme = {setTheme} />
    </div>
  );
}

export default App;















