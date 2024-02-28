
import styled, {keyframes} from 'styled-components';
import { useState } from 'react';
import { Koho, Atb, Education } from './globals.js';
import { colors } from './themes.js';
import kohoLogo from './assets/koho.png';
import atbLogo from './assets/atb.png';
import naitLogo from './assets/nait.svg';

const Title = styled.div`
  padding-top: 1rem;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  color: ${colors.green};
`

const SubHeading = styled.div`
  padding-top: 0.5rem;
  font-size 1rem;
  font-weight: bold;
`

const ExperienceSection = styled.div`
  height: 30rem;
  overflow-y: scroll;
`

const CompanyDesc = styled.p`
  padding-top: 0.3rem;
  >div {
    padding: 0.2rem;
  }
`

const ExperienceNavItem = styled.button`
  background-color: ${(props) => props.selected ? colors.green : 'transparent'};
  color: ${(props) => props.selected ? 'black' : colors.green};
  margin: 0 5rem 1rem 0rem;
  font: inherit;
  font-size: 1.15rem;
  border: none;
  cursor: pointer;
`

const Logo = styled.img`
  width: 5rem;
  margin: 0.75rem 1rem 0 0  ;
  float: left;
`

const Experiene = () => {
  const [activeNavItem, setActiveNavItem] = useState('koho');


  const handleNavItemClick = (name) => {
    setActiveNavItem(name);
  };
  return (
    <div>
        <ExperienceNavItem selected={activeNavItem === Koho} onClick={() => handleNavItemClick(Koho)}>koho.txt</ExperienceNavItem>
        <ExperienceNavItem selected={activeNavItem === Atb} onClick={() => handleNavItemClick(Atb)}>atb-financial.txt</ExperienceNavItem>
        <ExperienceNavItem selected={activeNavItem === Education} onClick={() => handleNavItemClick(Education)}>education.txt</ExperienceNavItem>
      {
        activeNavItem === Koho && (
        <ExperienceSection>
         <Title>Sr. Backend Engineer - KOHO Financial  | 2021 - 2023</Title>         
         {/* 2021 - 2023*/ }
         <Logo src={kohoLogo} alt="KOHO" />
          <CompanyDesc>KOHO is a Canadian fintech company that offers a Visa Card + mobile banking app 
            with modern features like credit building and helpful budgeting tools.</CompanyDesc>
          <SubHeading>Secured Credit Building (Jan 2023 - Aug 2023) </SubHeading>
              <ul>
                <li>
                  Designed and developed new backend microservice utilizing Golang, go-cron, Docker, AWS, DynamoDB, and Jenkins 
                  to automate monthly collections of the subscription fees and loan repayments.
                </li>
                <li>
                  Desined and developed new REST endpoints using Golang, go-cron, PostgreSQL, and RabbitMQ to 
                  manager user's subscription to the feature.
                </li> 
                <li>
                  Implemented a backend process for conducting experiments with different price points, utilizing LaunchDarkly 
                  flags, control/variant groups, and measuring outcomes in Metabase.
                </li>
                <li>Developed a new REST endpoint using Golang, go-cron, PostgreSQL to fetch the user's credit score from Equifax every month. </li>
                <li>Worked closely with other developers, frequently pairing, mentoring, and performing code reviews.</li>
           
            </ul>

            <SubHeading>Risk, KYC and Fraud (2022 - 2023) </SubHeading>
              <ul>
                <li>Built integrations with various fraud detection tools including threatmetrix, comply advantage, trulioo and onfido.
                  Spun up a ne risk microservice 
                  Modernized </li>
                <li>New risk service, configuratio, pipeline using internal tool</li>
                <li>Created the solution design and development plan.</li>
                <li>Migrated monolith into new microservice</li>
                <li>ML NODEL</li>
                <li>integrated with comply advantage threatmetrix</li>
                <li>built unit and intergation test</li>
                <li>Mentored and paired with other developers and performed constructive code reviews.</li>
                <li>documented entire kyc flow to date</li>
                <li>Developed RESTful APIs using Express and microservices architecture.</li>
            </ul>

            <SubHeading>Stripe autoload (??? - ???) </SubHeading>
              <ul>
                <li>Built new endpoints integrating with stripe for a more seemless fund loading experine</li>
            </ul>

            <SubHeading>Localization of app (??? - ???) </SubHeading>
              <ul>
                <li>Built BACKEND serving the fe french or english content based on lcation. localization</li>
            </ul>
        </ExperienceSection>
        )
      }
      {
        activeNavItem === Atb && (
        <ExperienceSection>
          <Title>Full-Stack Developer - ATB Financial | 2013 - 2021</Title>
          <Logo src={atbLogo} alt="ATB" />
          <CompanyDesc>ATB financial is a bank that provides financial services to over 800,000 Albertan residents and businesses.</CompanyDesc>

            <SubHeading>Business Banking Mobile - Lead Developer (2018 - 2021) </SubHeading>
              <ul>
                <li>Converted ATB’s Business Online platform into an iOS and Android app using Cordova.</li>
                <li>Created the Solution Design and Development Roadmap.</li>
                <li>Built new biometric login and 2FA authentication using JWT, Auth0 and Cordova plugins.</li>
                <li>Built in-app cheque deposits, using cordova plugins to leveraging device camera.</li>
                <li>Developed responsive, accessible, and reusable React components for mobile.</li>
                <li>Developed RESTful APIs using Express and microservices architecture.</li>
                <li>Built unit tests in Jest and React Testing Library.</li>
                <li>Constructed mobile end-to-end tests using Selenium and Experitest.</li>
                <li>Configured CI/CD pipelines in GitLab and BitRise.</li>
                <li>Provided on-call support and particapted in outage resolution and deployments.</li>
                <li>Worked closely with other developers, frequently pairing, mentoring, and performing code reviews.</li>
            </ul>

            <SubHeading>Online Banking - Developer (2017 - 2018) </SubHeading>
            <ul>
              <li>Developed a new online banking platform using React, Redux, Babel, Webpack, Express, and Node.js.</li>
              <li>Developed responsive, accessible, and reusable React components, following atomic design principles.</li>
              <li>Implemented the e-transfer feature's front-end components and backend endpoints integrating with Interac</li>
              <li>Developed RESTful APIs using Express and microservices architecture.</li>
              <li>Built unit tests in Jest and React Testing Library.</li>
              <li>Constructed mobile end-to-end tests using Selenium</li>
              <li>Provided on-call support and particapted in outage resolution and deployments.</li>
            </ul>

            <SubHeading>Retail Banking Mobile - Developer (2016 - 2017) </SubHeading>
            <ul>
              <li>Developed a new ATB mobile banking app using HTML5 and Cordova</li>
              <li>Implemented account summary and bill payment UIs using HTML5, CSS, Bootstrap and SAP Mobile Platform</li>
              <li>Built backend endpoints using Soap and XML</li>
              <li>Used Jenkins to automate builds and deployments</li>
              <li>Provided on-call support and particapted in outage resolution and deployments.</li>
            </ul>

            <SubHeading>ATB Flexible Pension Plan - Developer (2015 - 2016)</SubHeading>
            
            <ul>
              <li>Developed an internal .NET app to allow ATB team members to update or make changes to their pension</li>
              <li>Tech Used: C#, ASP.NET, SQL Server, SOAP, SVN, NUnit</li>
            </ul>

            <SubHeading>ATB Customer Service Application - Jr. Developer (2013 - 2015)</SubHeading>
            <ul>
              <li>Developed features in Java Swing and provided operational support for an internal desktop app used by customer service team members in ATB branches.</li>  
            </ul>
        </ExperienceSection>
        )
      }
      {
        activeNavItem === Education && (
        <ExperienceSection>
          <Title>Northern Alberta Institute of Technology (NAIT) | 2011 - 2013</Title>
          <Logo src={naitLogo} alt="NAIT" />
          <CompanyDesc>Digital Media and IT Diploma | 3.9 GPA
            <div> Edmonton, Alberta</div>
          </CompanyDesc>
        </ExperienceSection>
        )
      }
    </div>
  );
}

export default Experiene;
