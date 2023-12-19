import styled from 'styled-components';
import { WhoAmiCmd, ExperienceCmd, CommunityCmd, OtherThingsCmd } from './globals.js';

const NavWrapper = styled.div`
margin-top: 3rem;
padding: 2rem;
width: 15rem;

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


const Nav = ({ setActiveNavItem }) => {


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
