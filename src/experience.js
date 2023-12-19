
import styled, {keyframes} from 'styled-components';
import { useState } from 'react';
import { Koho, Atb, Education } from './globals.js';


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
  color: rgba(255,160,180,1);
  font-size: 1.25rem;
  padding-top: 1rem;
`

const animateBlink = (selected) => keyframes`
  from{
    background-color: transparent;
  }
  to{
    background-color: rgba(64,56,34,1));
  }
`;

const ExperienceNavItem = styled.button`
  background-color: ${(props) => props.selected ? 'rgba(64,56,34,1)': 'transparent'};
  color: rgba(100,255,100,1);
  margin: 0 1rem 0 0rem;
  font: inherit;
  font-size: 1.15rem;
  border: none;
  cursor: pointer;
  animation: ${(props) => animateBlink(props.selected)} 900ms steps(29,end) 5;
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
