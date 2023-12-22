
import styled, {keyframes} from 'styled-components';
import noise from './noise.svg'
import Experience from './experience.js';
import { WhoAmiCmd, ExperienceCmd, CommunityCmd, OtherThingsCmd } from './globals.js';
import { colors } from './themes.js';

const CLIWrapper = styled.div`
  width: 55rem;
  height: 30rem;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 5px 5px 10px 8px rgba(0,0,0,.3);
  box-shadow: 0.3rem 0.3rem 1rem 0.5rem rgba(0,0,0,.35);
  background: 
	linear-gradient(
    120deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.6)
    ),
    url(${noise});
`

const Body = styled.div`    
  padding: 1rem 2rem 0 1.25rem;
  opacity: 0;
  animation: fadeIn ease 1.6s;
  animation-fill-mode: forwards;
  animation-delay: 1.6s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`

const Description = styled.div`
  padding-left: 1rem;
  opacity: 0;
  animation: fadeIn ease 1.6s;
  animation-fill-mode: forwards;
  animation-delay: 1.6s;
  & > a {
    color: ${colors.priamry};
  }
`

const animateText = (length) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${length}rem;
  }
`;


const CmdName = styled.div`
  font-size: 1.5rem;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  border-right: 1rem transparent solid;
  animation: ${(props) => animateText(props.length)} 0.6s steps(12,end) 0.6s 1 normal both,
             animated-cursor 800ms steps(29,end) 3;

  @keyframes animated-cursor{
    from{border-color: ${colors.priamry};}
    to{border-color: transparent);}
  }
`

const Heading = styled.div`
  color: ${colors.priamry};
  font-size: 1.3rem;
  padding: 1rem 0 0.25rem 0;
  letter-spacing: 0.1rem;
`

const Name = styled.div`
  color: ${colors.priamry};
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
`

const Title = styled.div`
  font-size: 1rem;
  padding-bottom: 1rem;
`

const Caret = styled.div`
  float: left;
  padding-right: 0.5rem;
  font-size: 1.5rem;
`

const CommunityContent = styled.p`
  font-size: 0.80rem;
`

const SubHeading = styled.div`
  font-size: 1rem;
  padding-top: 1rem;
`

const CmdWindow = ({ activeNavItem }) => {
  return (
    <div>
    {
      activeNavItem === WhoAmiCmd && (
        <CLIWrapper>
          <div>{cmdTitle(activeNavItem)}</div>
          <div>{whoami()}</div>
        </CLIWrapper>
      )
    }
     {
      activeNavItem === ExperienceCmd && (
        <CLIWrapper>
          <div> {cmdTitle(activeNavItem)}</div>
          <Body> <Experience /> </Body>
        </CLIWrapper>
      )
    }
    {
      activeNavItem === CommunityCmd && (
        <CLIWrapper>
          <div> {cmdTitle(activeNavItem)}</div>
          <div> {community()}</div>
        </CLIWrapper>
      )
    }
    {
      activeNavItem === OtherThingsCmd && (
        <CLIWrapper>
          <div> {cmdTitle(activeNavItem)}</div>
          <div> {otherthings()}</div>
        </CLIWrapper>
      )
    }

    </div>
  );
}

const cmdTitle = (activeNavItem) => {
  return (
    <div>
      <Caret>></Caret>
      <CmdName length={(activeNavItem.length)}>
        {activeNavItem}
      </CmdName>
    </div>
  );
}

const whoami = () => {
  return (
        <Body>
          <Name>Leila Elkhalidy</Name>
          <Title>Sr. Software Engineer - Kelowna, BC </Title>

          <Description>
            I create simple, elegant solutions for complex problems. With over 10 years of experience, I bring a wealth of knowledge 
            and skills gained through pivotal roles in two leading fintech companies (
              <a href="https://www.koho.ca/" target="_blank" rel="noopener noreferrer">KOHO</a>
            , <a href="https://www.atb.com/personal/" target="_blank" rel="noopener noreferrer">ATB Financial</a>). 
          </Description>
          <br />
          <Description>
            In my latest role at KOHO, I worked on the design and development of backend services and internal tools, using Golang, 
            across various areas of the business. I organized and led several initiatives, including the development of new user, 
            account, and credit-building features, the migration of legacy monolith code into new, renovated microservices, 
            and the enhancement of KYC and fraud detection on the platform with new integrations to internal ML models as well as 
            external vendor endpoints.
          </Description>

          <Heading>Tech Stack</Heading>
          <Description>
            Golang, JavaScript(ES6), React, Redux, Bable, Webpack, Node, Express, PostgreSQL, Docker, GitHub, Git, DataDog, AWS/AWSCLI,
            Terraform, Cordova/Ionic, Jenkins, GitLab, Bitbucket, Bitrise, Auth0, JSON, XML, CSS, REST,  Python, Java, C#
          </Description>

          <Heading>Dev Practices</Heading>
          <Description>
            CI/CD, Feature Toggling, Microservice Architecture, Unit Testing, Integration testing, Observability, Paired Programming, 
            Code Reviews, Test Driven Development, Test Automation, Agile, Scrum, Kanban, Documentation, RFCs, Mentoring & Feedback
          </Description>
        </Body>
  );
}


const otherthings = () => {
  return (
      <Body>
        some cool other things about me
      </Body>
  );
}

const community = () => {
  return (
      <Body>
        Community is important to me... community envolvement:
        <SubHeading>Women Who Go 2022 - present </SubHeading>
            <CommunityContent> organizer </CommunityContent>

            <SubHeading>ATB Eng Culture Excellence Award Winner, 2021</SubHeading>
            <CommunityContent>Awarded to ATB team members who have gone above and beyond to exemplify ATB’s Engineering Culture.</CommunityContent>

            <SubHeading>ATB Hackday - Fan Favourite Winner, 2019</SubHeading>
            <CommunityContent>Developed a plugin that standardizes APIs creation at ATB, speeding up dev time and improving code quality and logging.</CommunityContent>

            <SubHeading>HackEDbeta at Startup Edmonton, 2017</SubHeading>
            <CommunityContent>Volunteered as a Mentor at this beginner-friendly hackathon.</CommunityContent>

            <SubHeading>Apple Worldwide Developers Conference (WDDC), 2017</SubHeading>
            <CommunityContent>Attended sessions on Apple Pay, Swift, Accessibility, Core ML, and AR.</CommunityContent>

            <SubHeading>Google Cloud Relay, 2018</SubHeading>
            <CommunityContent>In this 6 hours coding relay challenge, I wrote a Google Cloud hosted React app that provides a localized ski condition forecast.</CommunityContent>
      </Body>
  );
}


export default CmdWindow;
