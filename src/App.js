import './global.css';
import React, { useState } from 'react';
import CmdWindow from './cmd-window.js';
import linkedinIcon from './linkedin.png';
import gitHubIcon from './github.png';
import emailIcon from './email.png';
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

const IconLinks = styled.img`
  width: 2.5rem;
  padding: 0.5rem;

  &:hover {
    filter: sepia(1) saturate(6000%) hue-rotate(290deg) brightness(106%) contrast(124%);
  }
`

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState(WhoAmiCmd);
  return (
    <div className="Global">
      <Wrapper>
        <CmdWindow activeNavItem={activeNavItem} />
        <Nav activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
        <div>
          <a href="https://github.com/luminaire-dev" target="_blank" rel="noopener noreferrer" title="Github">
            <IconLinks src={gitHubIcon} alt="Github" href="https://github.com/luminaire-dev" />
          </a>
          <a href="https://www.linkedin.com/in/leila-elkhalidy-928046212/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <IconLinks src={linkedinIcon} alt="Linkedin" />
          </a>
          <a href="mailto:leila.elkhalidy@gmail.com" title="Email">
            <IconLinks src={emailIcon} alt="Email" />
          </a>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
