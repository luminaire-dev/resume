import './App.css';
import styled from 'styled-components';
import noise from './noise.svg'
import { WhoAmiCmd, ExperienceCmd, CommunityCmd, OtherThingsCmd } from './globals.js';

const NavWrapper = styled.div`
margin: 3rem 0; 
padding: 2rem;
width: 15rem;
border-radius: 0.75rem;
box-shadow: 5px 5px 10px 8px rgba(0,0,0,.3);
background: 
	linear-gradient(
      200deg,
      rgba(255,20,50,0.1),
      rgba(0,0,0,0)
    ),
  url(${noise});

`
const NavItem = styled.button`
background: none;
font: inherit;
color: inherit;
border: none;
cursor: pointer;
font-size: 1rem;
padding: 2rem;
  &:hover .caret {
    visibility: visible; 
  }
`

const Caret = styled.div`
  visibility: hidden; 
  float: left;
  padding-right: 0.5rem;
`


const Nav = ({ activeNavItem, setActiveNavItem }) => {


const handleNavItemClick = (itemName) => {
  setActiveNavItem(itemName);
};

  return (
    <div>
     <NavWrapper>
     <NavItem onClick={() => handleNavItemClick(WhoAmiCmd)}>
      <Caret className="caret">></Caret>
      whoami_
      </NavItem>
      <NavItem onClick={() => handleNavItemClick(ExperienceCmd)}>
     <Caret className="caret">></Caret>
     experience_
     </NavItem>
     <NavItem onClick={() => handleNavItemClick(CommunityCmd)}>
     <Caret className="caret">></Caret>
     community_
     </NavItem>
     <NavItem onClick={() => handleNavItemClick(OtherThingsCmd)}>
     <Caret className="caret">></Caret>
     otherthings_
     {/* youtube channel / favourite albums / what you do for fun/ converstion starters */}
     </NavItem>
     </NavWrapper>
    </div>
  );
}

export default Nav;
