
import styled, {keyframes} from 'styled-components';
import Experience from './experience.js';
import { Small, Medium, WhoAmiCmd, ExperienceCmd, CommunityCmd, OtherThingsCmd } from './globals.js';
import { colors } from './themes.js';

const CLIWrapper = styled.div`
  width: 61.5rem;
  min-height: 35rem;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid ${colors.green};
  background-color: rgba(0,0,0,0.5);
  @media only screen and (max-width: ${Medium}) {
    width: 45rem;
    height: auto;
  }
  @media only screen and (max-width: ${Small}) {
    width: auto;
  }
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

const Link = styled.a`
  color: ${colors.green};
  cursor: pointer;
   &:hover {
    color: ${colors.darkGreen};
  }
`

const Description = styled.div`
  padding-left: 1rem;
  opacity: 0;
  animation: fadeIn ease 1.6s;
  animation-fill-mode: forwards;
  animation-delay: 1.6s;
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
  animation: ${(props) => animateText(props.length)} 0.5s steps(12,end) 0.5s 1 normal both,
             animated-cursor 600ms steps(29,end) 3;

  @keyframes animated-cursor{
    from{border-color: ${colors.green};}
    to{border-color: transparent);}
  }
`

const Heading = styled.div`
  color: ${colors.green};
  font-size: 1.3rem;
  padding: 1rem 0 0.25rem 0;
  letter-spacing: 0.1rem;
  @media only screen and (max-width: ${Medium}) {
    font-size: 1.1rem;
  }
`

const Name = styled.div`
  color: ${colors.green};
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  @media only screen and (max-width: ${Medium}) {
    font-size: 1.3rem;
  }
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
            I’m driven by the challenge of solving meaningful problems through code and technology. With over a decade of experience at three major
            fintech and banking companies (
              <Link href="https://synctera.com/" target="_blank" rel="noopener noreferrer">Synctera</Link>
            , <Link href="https://www.koho.ca/" target="_blank" rel="noopener noreferrer">KOHO</Link>
            , and <Link href="https://www.atb.com/personal/" target="_blank" rel="noopener noreferrer">ATB Financial</Link>
            ), 
            I've developed deep expertise building and scaling reliable solutions in the financial space.
          </Description>
          <br />
          <Description>
          In my latest position at Synctera, I designed and developed backend systems using Golang across the risk, compliance, 
          and lending domains. I worked on various core products including Customer Risk Rating (CRR), 
          credit dispute processing, KYC/KYB and Synctera's case management systems.
          </Description>

          <Heading>Tech Stack</Heading>
          <Description>
          Golang, PostgreSQL, JavaScript(ES6) (React, Redux, Bable, Webpack, Node, Express), Java, C#, Docker, Git, GitHub, Gitlab, GCP, 
          Terraform, Grafana, DataDog, AWS, RabbitMQ, Cordova/Ionic, Jenkins, Bitbucket, Bitrise, Auth0, JSON, XML, CSS, REST.
          </Description>

          <Heading>Dev Practices</Heading>
          <Description>
          CI/CD, Feature Toggling, Event-Driven Architecture(Pub/Sub), Outbox Pattern, Integration Testing, Unit Testing, 
          Test Automation, Test Driven Development, Database Normalization, Indexing, Locking, Idempotency, Paired Programming,
          Code Reviews, Observability, Agile, Scrum, Kanban, Documentation, Request for Comments(RFC). 
          </Description>
        </Body>
  );
}


const otherthings = () => {
  return (
    <Body>
      Just a few other things about me:
      <ul>
        <li>I live in beautiful Kelowna, BC, and love playing ultimate frisbee, biking, skiing, and swimming.</li>
        <li>Other than software, music is a big passion of mine. Feel free to check out my&nbsp; 
          <Link href="https://www.youtube.com/channel/UCrOn-19Q386KEzQU8l4tipw" target="_blank" rel="noopener noreferrer" title="Youtube">Youtube channel
          </Link>
        !</li>
      </ul>
      If you'd like to know anyting else just ask!
    </Body>
  );
}

const community = () => {
  return (
      <Body>
        Building community, beyond my regular day-to-day responsibilities, has always been important and meaningful to me. 
        Here are some of the ways I've been involved and acknowledged for my participation in different communities:
            <Heading>Women Who Go Toronto, 2022 - Present</Heading>
            <div>I've been involved in this community of women and non-binary Go developers;
              organizing book clubs, coding challenges, and talks on various Go topics.
            </div>
            
            <Heading>deCODE Hackathon Fall, 2021</Heading>
            <div>
              Volunteered as a mentor, representing KOHO at this student hackathon where we built an expense splitting feature. 
            </div>

            <Heading>ATB Eng Culture Excellence Award Winner, 2021</Heading>
            <div>Awarded to ATB team members who have gone above and beyond to exemplify ATB’s Engineering Culture.</div>

            <Heading>ATB Hackday - Fan Favorite Winner, 2019</Heading>
            <div>Participated in this 2 day hackathon where we developed a plugin that standardizes APIs 
              creation at ATB, speeding up dev time and improving code quality and logging.</div>

            <Heading>Google Cloud Relay, 2018</Heading>
            <div>Participated in this 6 hours coding relay challenge, where 
              my team and I developed a Google Cloud hosted React app that provides a localized ski condition forecast.
            </div>

            <Heading>HackEDbeta at Startup Edmonton, 2017</Heading>
            <div>Volunteered as a Mentor at this beginner-friendly hackathon.</div>

            <Heading>Kelowna Ultimate Spitit and Communication director, 2024 - present</Heading>
            <div>Promote sportsmanship and community engagement by resolving on-field disputes, 
            organizing ultimate frisbee events, and managing public communications.</div>
      </Body>
  );
}


export default CmdWindow;
