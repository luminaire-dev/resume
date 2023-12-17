import './App.css';
import styled from 'styled-components';
import noise from './noise.svg'

const NavWrapper = styled.div`
margin: 3rem 0; 
padding: 2rem;
width: 15rem;
border-radius: 0.75rem;
box-shadow: 5px 5px 10px 8px rgba(0,0,0,.3);
background: 
	linear-gradient(
      200deg,
      rgba(255,20,50,0.15),
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


const Nav = () => {
  const handleButtonClick = () => {
    console.log("button clicked");
  };

  return (
    <div>
     <NavWrapper>
     <NavItem onClick={handleButtonClick}>
      <Caret className="caret">></Caret>
      whoami_
      </NavItem>
      <NavItem>
     <Caret className="caret">></Caret>
     experience_
     </NavItem>
     <NavItem>
     <Caret className="caret">></Caret>
     community_
     </NavItem>
     <NavItem>
     <Caret className="caret">></Caret>
     otherthings_
     {/* youtube channel / favourite albums / what you do for fun/ converstion starters */}
     </NavItem>
     </NavWrapper>
    </div>
  );
}

export default Nav;
