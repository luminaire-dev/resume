
import styled, {keyframes} from 'styled-components';
import { useState } from 'react';
import { Koho, Atb, Education } from './globals.js';
import { colors } from './themes.js';


const Description = styled.div`
  padding-bottom: 1rem;
  opacity: 0;
  animation: fadeIn ease 2s;
  animation-fill-mode: forwards;
`

const Flex = styled.div`
  display: flex;
`

const Heading = styled.div`
  color: ${colors.priamry};
  font-size: 1.3rem;
  padding: 1rem 0 0.25rem 0;
  letter-spacing: 0.1rem;
`


const ExperienceNavItem = styled.button`
  background-color: ${(props) => props.selected ? colors.secondary : 'transparent'};
  color: ${(props) => props.selected ? 'white' : colors.secondary};
  margin: 0 3.5rem 0 0rem;
  font: inherit;
  font-size: 1.15rem;
  border: none;
  cursor: pointer;
`

const Experiene = () => {
  const [activeNavItem, setActiveNavItem] = useState('koho');


  const handleNavItemClick = (name) => {
    setActiveNavItem(name);
  };
  return (
    <div>
      <Flex>
        <ExperienceNavItem selected={activeNavItem === Koho} onClick={() => handleNavItemClick(Koho)}>koho.txt</ExperienceNavItem>
        <ExperienceNavItem selected={activeNavItem === Atb} onClick={() => handleNavItemClick(Atb)}>atb-financial.txt</ExperienceNavItem>
        <ExperienceNavItem selected={activeNavItem === Education} onClick={() => handleNavItemClick(Education)}>education.txt</ExperienceNavItem>
      </Flex>

      {
        activeNavItem === Koho && (
        <div>
          <Heading>Sr Backend Engineer - KOHO</Heading>
          <Description>2021 - 2023</Description>
          <Description>Koho Financial </Description>
        </div>
        )
      }
      {
        activeNavItem === Atb && (
        <div>
          <Heading>Full Stack Developer - ATB Financial, 2013 - 2021</Heading>
          <Description>ATB Financial is a financial institution that provides services to over 770,000 Albertans. 
              I have worked on the following projects with this company:</Description>
        </div>
        )
      }
      {
        activeNavItem === Education && (
        <div>
          <Heading>Education</Heading>
          <h4>Digital Media and IT Diploma - Northern Alberta Institute of Technology (NAIT)</h4>
        </div>
        )
      }
    </div>
  );
}

export default Experiene;
