import './App.css';
import styled from 'styled-components';
import gitHubIcon from './github.png';
import emailIcon from './email.png';
import noise from './noise.svg'

const CLIWrapper = styled.div`
  margin: 3rem 3rem 0 5rem; 
  width: 60rem;
  height: 35rem;
  padding: 2rem;
  @media only screen and (max-width: 550px) {
    margin 1rem 0.5rem;
    padding: 1rem 0.5rem;
  }
  border-radius: 0.75rem;
  box-shadow: 5px 5px 10px 8px rgba(0,0,0,.3);
  background: 
	linear-gradient(
      200deg,
      rgba(255,20,50,0.15),
      rgba(0,0,0,0), 
      rgba(70, 40, 100, 0.2)
    ),
  url(${noise});
`

const Body = styled.div`    
  padding: 0 2rem 0 1.25rem;
  opacity: 0;
  animation: fadeIn ease 2s;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`

const Description = styled.div`
  padding-bottom: 1rem;
  opacity: 0;
  animation: fadeIn ease 2s;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @media only screen and (max-width: 550px) {
    letter-spacing: 0rem;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    display: block;
  }
`

const Heading = styled.div`
  font-size: 1.25rem;
  padding-top: 1rem;

  color: pink;
  @media only screen and (max-width: 550px) {
    font-size: 1.25rem;
  }
`

const SubHeading = styled.div`
  font-size: 1rem;
  padding-top: 1rem;
  @media only screen and (max-width: 550px) {
    font-size: 1.25rem;
  }
`

const CmdName = styled.div`
  font-size: 1.5rem;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  border-right: 1rem transparent solid;
  @media only screen and (max-width: 550px) {
    border-right: 1rem transparent solid;
    font-size: 1.25rem;
    max-width: 12rem;
    font-weight: bold;
  }
  animation: animated-text 0.75s steps(12,end) 0.75s 1 normal both,
             animated-cursor 900ms steps(29,end) 3;

  @keyframes animated-text{
    from{width: 0;}
    to{width: 6rem;}
  }

  @keyframes animated-cursor{
    from{border-color: pink;}
    to{border-color: transparent);}
  }
`

const Name = styled.div`
  font-size: 1.5rem;

  color: pink;
  @media only screen and (max-width: 550px) {
    font-size: 1.25rem;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1.05rem;
  padding-bottom: 1rem;
  @media only screen and (max-width: 550px) {
    font-size: 1.25rem;
  }
`
const Caret = styled.div`
  float: left;
  padding-right: 0.5rem;
  font-size: 1.5rem;
  @media only screen and (max-width: 550px) {
    font-size: 1.25rem;
    padding: 0 0.5rem;
  }
`

const IconLinks = styled.img`
  width: 2.5rem;
  margin: 0.75rem 2rem 0 0  ;
  opacity: 0;
  animation: fadeIn ease 2s;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @media only screen and (max-width: 700px) {
    width: 1.2rem;
    padding: 0 0 0 1.5rem ;
    margin: 0 ;
  }

  &:hover {
    filter: sepia(1) saturate(6000%) hue-rotate(290deg) brightness(106%) contrast(124%);
  }
`


function CmdWindow() {
  return (
    <div>
      <CLIWrapper>
        <Flex>
          <div>
            <Caret>></Caret>
            <CmdName>
              whoami
            </CmdName>
          </div>
          <div>
            <a href="https://github.com/luminaire-dev" target="_blank">
              <IconLinks src={gitHubIcon} alt="Git Hub" href="https://github.com/luminaire-dev" />
            </a>
            <a href="mailto:leila.elkhalidy@gmail.com">
              <IconLinks src={emailIcon} alt="Git Hub" />
            </a>
          </div>
        </Flex>
        <Body>

        <Name>Leila Elkhalidy  </Name>
        <Title>Sr. Software Engineer </Title>
            <Description>I create simple, elegant solutions for complex problems. With over 10 years of experience, I believe code is art just as much as it is science and my approach lies at the intersection of design and functionality. </Description>

            <Heading>Tech Stack</Heading>
            <Description>GoLang, PostgreSQL, AWS, AWSCLI, Terraform, JavaScript/ES6, React, Redux, Bable, Webpack, Node.js, Express, Cordova, JSON, XML, CSS, SOAP, REST, Json Web Tokens (JWT),
            Python, Pytes, Jest, Experitest (Mobile test automation), MongoDB, Java, Git, GitLab, Bitrise, Jenkins, Bitbucket, auth0</Description>

            <Heading>Dev Practices</Heading>
            <Description>Agile/SCRUM/Kanban, Trunk Based Development, Continuous Integration (CI), Continuous Deployment (CD), Feature Toggling,
            Microservice Architecture, Unit Testing, Test Automation, Paired Programming, Code Reviews, Test Driven Development</Description>

        </Body>
      </CLIWrapper>
    </div>
  );
}

export default CmdWindow;
