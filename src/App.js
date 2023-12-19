import './global.css';
import React, { useState } from 'react';
import CmdWindow from './cmd-window.js';
import Nav from './nav.js';
import { WhoAmiCmd } from './globals.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState(WhoAmiCmd);
  return (
    <div className="Global">
      <Wrapper>
        <CmdWindow activeNavItem={activeNavItem} />
        <Nav activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
      </Wrapper>
    </div>
  );
}

export default App;
