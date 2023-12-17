import './App.css';
import React, { useState } from 'react';
import CmdWindow from './cmd-window';
import Nav from './nav';
import { WhoAmiCmd } from './globals.js';

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState(WhoAmiCmd);
  return (
    <div className="App">
      <CmdWindow activeNavItem={activeNavItem} />
      <Nav activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
    </div>
  );
}

export default App;
