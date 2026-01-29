import styled from 'styled-components';
import { WhoAmiCmd, ExperienceCmd, CommunityCmd, OtherThingsCmd } from './globals.js';

const NavWrapper = styled.div`
display: flex;
`
const NavItem = styled.button`
background: none;
font: inherit;
color: inherit;
border: none;
cursor: pointer;
font-size: 1rem;
padding: 1rem ;
`

const MobileNav = ({ setActiveNavItem }) => {

const handleNavItemClick = (itemName) => {
  setActiveNavItem(itemName);
};

  return (
    <div>
     <NavWrapper>
      <NavItem onClick={() => handleNavItemClick(WhoAmiCmd)}>
        whoami_
        </NavItem>
        <NavItem onClick={() => handleNavItemClick(ExperienceCmd)}>
      exp_
      </NavItem>
      <NavItem onClick={() => handleNavItemClick(CommunityCmd)}>
      community_
      </NavItem>
      <NavItem onClick={() => handleNavItemClick(OtherThingsCmd)}>
      other_
      </NavItem>
     </NavWrapper>
    </div>
  );
}

export default MobileNav;
