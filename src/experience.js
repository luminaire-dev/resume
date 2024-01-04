
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
  color: ${colors.green};
  font-size: 1.3rem;
  padding: 1rem 0 0.25rem 0;
  letter-spacing: 0.1rem;
`

const SubHeading = styled.div`
  color: ${colors.green};
  font-size: 1rem;
  padding-top: 1rem;
`

const ExperienceSection = styled.div`
  height: 27rem;
  overflow-y: scroll;
`


const ExperienceNavItem = styled.button`
  background-color: ${(props) => props.selected ? colors.green : 'transparent'};
  color: ${(props) => props.selected ? 'black' : colors.green};
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
          <Description>KOHO Financial Inc. is a Canadian fintech company based in Toronto.</Description>
        </div>
        )
      }
      {
        activeNavItem === Atb && (
        <ExperienceSection>
          <Heading>Full Stack Developer - ATB Financial, 2013 - 2021</Heading>
          <Description>ATB Financial is a financial institution that provides services to over 770,000 Albertans. I have worked on the following projects with this company:</Description>
          
            <h4>Business Banking Mobile - Lead Developer, 2018 - 2021 </h4>
              <Description>The project was to convert ATB’s Business Online platform into an iOS and Android app using Cordova.</Description>
              <li>Created the solution design and plan</li>
              <li>update FE components to be resposive on mobile devices, Developed responsive, accessible and reusable react mobile components</li>
              <li>created cordova plugin to capture cheques</li>
              <li>Developed RESTful APIs using Express and microservice architecture</li>
              <li>Developed biometric and 2FA authentication flows using JWT and Auth0</li>
              <li>Developed in-app remote cheque deposits (leveraging native device camera and image analysis technologies)</li>
              <li>Built unit test in Jest and React Testing Library</li>
              <li>Built mobile e2e tests - using Selenium and Experitest - running on physical devices stored in the cloud</li>
              <li>Configured CI/CD pipelines in GitLab and BitRise</li>
              <li>Acted as a leader by collborating, pairing, mentoring, code review Performed knowledge transfer diligent and constructive code reviews</li>

            <h4>Online Banking, 2017 - 2018 </h4>
              <li>Full stack development of a new online banking platform using React Redux, Babel, Webpack, Express, and Node.js</li>
              <li>Developed responsive, accessible, and reusable react components</li>
              <li>Developed e-transfer, bill payment, and account summary features</li>
              <li>Developed RESTful APIs using Express and microservice architecture</li>
              <li>Built unit test in Jest and React Testing Library</li>
              <li>Built e2e tests in Selenium</li>
              <li>Configured CI/CD pipelines in GitLab and BitRise</li>

            <h4>Retail Banking Mobile, 2016 - 2017</h4>
              <li>Development of ATB's retail banking mobile and web platform using HTML5 and Cordova</li>
              <li>Developed remote cheque deposit, e-transfer, bill payment, and account summary features</li>
              <li>Configured CI/CD pipelines in Jenkins</li>
              <li>Tech Used: HTML5, CSS, Bootstrap, SVN, Jenkins, SAP Mobile Platform, SOAP</li>

            <h4>ATB Flexible Pension Plan, 2015 - 2016</h4>
            <li>Developed an internal .NET app to allow ATB team members to update or make changes to their pension</li>
            <li>Tech Used: C#, ASP.NET, SQL Server, SOAP, SVN, NUnit</li>

            <h4>ATB Customer Service Application (CSA), 2013 - 2015</h4>
            <li>Development and operational support of an internal desktop app used by our customer service teams in ATB branches</li>

        </ExperienceSection>
        )
      }
      {
        activeNavItem === Education && (
        <div>
          <Heading>Education</Heading>
          <SubHeading> Northern Alberta Institute of Technology (NAIT) </SubHeading>
          <h4>Digital Media and IT Diploma - Northern Alberta Institute of Technology (NAIT)</h4>
        </div>
        )
      }
    </div>
  );
}

export default Experiene;
