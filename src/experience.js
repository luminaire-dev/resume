
import styled, {keyframes} from 'styled-components';
import { useState } from 'react';
import { Koho, Atb, Education, Synctera } from './globals.js';
import { colors } from './themes.js';
import syncteraLogo from './assets/syncteraLogo.png';
import kohoLogo from './assets/koho.png';
import atbLogo from './assets/atb.png';
import naitLogo from './assets/nait.svg';

const Title = styled.div`
  padding-top: 1rem;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  color: ${colors.green};
  @media only screen and (max-width: 1300px) {
    font-size: 1.1rem;
  }
`

const Link = styled.a`
  color: ${colors.green};
`


const SubHeading = styled.div`
  padding-top: 0.5rem;
  font-size 1rem;
  font-weight: bold;
`

const ExperienceSection = styled.div`

`

const CompanyDesc = styled.p`
  padding-top: 0.3rem;
  >div {
    padding: 0.2rem;
  }
`

const ExperienceNavItem = styled.a`
  background-color: ${(props) => props.selected ? colors.green : 'transparent'};
  color: ${(props) => props.selected ? 'black' : colors.green};
  margin: 0 5rem 1rem 0rem;
  padding: 0.20rem;
  font-size: 1.15rem;
  cursor: pointer;
   &:hover {
    color: ${colors.darkGreen};
  }
  text-decoration: underline;
  @media only screen and (max-width: 1300px) {
    display: block;
    margin: 0.25rem 0;
  }
`

const Logo = styled.img`
  width: 5rem;
  margin: 0.75rem 1rem 0 0  ;
  float: left;
`


const KohoLogo = styled.img`
  width: 3.35rem;
  margin: 0.9rem 1rem 0 0;
  float: left;
`

const SyncteraLogo = styled.img`
  width: 3.75rem;
  margin: 1.25rem 0.8rem 0 0  ;
  float: left;
`


const Experiene = () => {
  const [activeNavItem, setActiveNavItem] = useState(Synctera);


  const handleNavItemClick = (name) => {
    setActiveNavItem(name);
  };
  return (
    <div>
        <ExperienceNavItem selected={activeNavItem === Synctera} onClick={() => handleNavItemClick(Synctera)}>synctera.txt</ExperienceNavItem>
        <ExperienceNavItem selected={activeNavItem === Koho} onClick={() => handleNavItemClick(Koho)}>koho.txt</ExperienceNavItem>
        <ExperienceNavItem selected={activeNavItem === Atb} onClick={() => handleNavItemClick(Atb)}>atb_financial.txt</ExperienceNavItem>
        <ExperienceNavItem selected={activeNavItem === Education} onClick={() => handleNavItemClick(Education)}>education.txt</ExperienceNavItem>
      {
        activeNavItem === Synctera && (
        <ExperienceSection>
         <Title>Sr. Software Engineer - Synctera | 2024 - present</Title>         

         <SyncteraLogo src={syncteraLogo} alt="Synctera" />
          <CompanyDesc>
          Synctera is a Banking-as-a-Service (BaaS) platform that connects fintechs with banks,
          offering APIs to launch and scale financial products with built-in compliance monitoring, KYC, and fraud detection.

          </CompanyDesc>
          <SubHeading>Credit Dispute Workflow Automation (May 2025 - Aug 2023) </SubHeading>
          <ul>
                <li>
                Designed and implemented an automated credit dispute workflow using Golang, PostgreSQL, and GCP Pub/Sub, replacing a previously manual process.
                </li>
                <li>
                  Built functionality to ingest dispute batch files from a B2B credit partner, 
                  over SFTP, using a Google Cloud Storage (GCS) event listener.
                </li>
                <li>
                  Built logic to parse and process credit dispute data from batch files, storing credit dispute resources within our system.
                </li>
                <li>
                  Automated event-driven case creation within the Synctera platform for each credit dispute resources, 
                  improving resolution speed, traceability, and collaboration between Synctera and credit partners.
                </li>
                <li>
                  Wrotes e2e and integration tests, and created alerting reports in Metabase to monitor system health post-launch.
                </li>
                <li>
                  Worked closely with frontend developers to ensure the backend effectively serves frontend needs and vision.
                </li>
            </ul>
             

            <SubHeading>Customer Risk Rating (CRR) Enhancements (Feb 2025 - May 2023) </SubHeading>
            <ul>
                <li>
                Designed and developed APIs that enable banks to configure their own risk score calculation settings (previously managed by
                 Synctera) allowing them to fine-tune parameter weights and thresholds to suit their specific 
                 risk program and strategy.
                </li>
                <li>
                 Refactored legacy CRR code and introduced parallel processing of risk score calculations 
                 using Go worker pools, improving system performance.
                </li>
                <li>
                Implemented background job orchestration using our in-house "Taskmaster" (async, task processing) service, automating the recalculation of all risk scores
                under a tenants upon config change.
                </li>
                <li>
                Wrote end-to-end and integration test coverage to prevent 
                regressions and improve reliability.
                </li>
                <li>
                Collaborated closely with frontend engineers to ensure seamless integration across services and UI.
                </li>
            </ul>
          
            <SubHeading> External Account Improvements (July 2024 - Sept 2024)</SubHeading>
            <ul>
                <li>
                Worked on integrations with Plaid and other vendors which enable account ownership 
                verification, and linking external accounts (ledgered by other financial institutions) to the Synctera platform.
                </li>
                <li>
                Enhanced legacy code robustness and error handling to support various Plaid responses and error types.
                </li>
                <li>
                  Refactored the external account APIs to align with our standard multi-tenant pattern,
                  resolving inconsistencies in multi-tenant identity and permission handling.
                </li>
            </ul>

            <SubHeading>HawkAI Integration Enhancements (July 2024)</SubHeading>
            <ul>
                <li>
                Enhanced our webhook integration with HawkAI by configuring pub/sub in the service layer, enabling asynchronous processing 
                using an outbox pattern to ensure message reliability.
                </li>
            </ul>
        </ExperienceSection>
        )
      }
      {
        activeNavItem === Koho && (
        <ExperienceSection>
         <Title>Sr. Backend Engineer - KOHO Financial  | 2021 - 2023</Title>         
         {/* 2021 - 2023*/ }
         <KohoLogo src={kohoLogo} alt="KOHO" />
          <CompanyDesc>KOHO is a Canadian fintech company that offers a Visa Card + mobile banking app 
            with modern features like credit building and helpful budgeting tools.</CompanyDesc>
          <SubHeading>Secured Credit Building (Jan 2023 - Aug 2023) </SubHeading>
              <ul>
                <li>
                  Developed a new microservice using Golang and DynamoDB to manage 
                  collection of fee and payments from the users.
                </li>
                <li>
                  Designed and developed REST endpoints using Golang and PostgreSQL to manage user's 
                  subscription and fetch user's credit score from Equifax.
                </li>
                <li>
                  Introduced event-driven patterns with RabbitMQ to replace legacy code orchestrating HTTPS calls to other services.
                </li>
                <li>
                  Implemented a backend process to conduct experiments on varying price points
                  using LaunchDarkly control/variant groups, and measuring user adoption rates in Metabase.
                </li>
                <li>
                  Wrote unit and integration tests.
                </li>
                <li>
                  Provided on-call support for the feature and improved operational support processes.
                </li>
                <li>
                  Worked closely with other developers, frequently pairing, mentoring, and performing code reviews.
                </li>
            </ul>

            <SubHeading>KYC and Fraud Detection (2022 - 2023) </SubHeading>
              <ul>
                <li>
                  Designed and developed a new microservice using Golang, PostgreSQL, Docker, AWS, and Jenkins to 
                  handle KYC and fraud detection checks on user registration.
                </li>
                <li>Built integrations with various KYC and fraud detection tools including KOHO's machine learning model, Threatmetrix, 
                  Comply Advantage, Trulioo and Onfido.
                 </li>
                 <li>Decommissioned legacy monolith code, re-routing traffic to new microservice, using event driven patterns.</li>
                <li>Wrote documentation outlining the KYC and fraud check workflows.</li>
                <li>
                  Provided on-call support for KYC and Fraud detection features and contributed to operational support documentation.
                </li>
                <li>
                  Wrote unit and integration tests.
                </li>
                <li>
                  Worked closely with other developers, frequently pairing, mentoring, and performing code reviews.
                </li> 
            </ul>

            <SubHeading>Fund Loading With Stripe (2022) </SubHeading>
              <ul>
                <li>
                  Built new integration with Stripe, to allow users to load funds using other debit or credit cards.
                </li>
                <li>
                  Wrote documentation for the workflows.
                </li>
                <li>
                  Wrote unit and integration tests.
                </li>
            </ul>

            <SubHeading>Localization of backend content (2021 - 2022) </SubHeading>
              <ul>
                <li>Worked on a new backend Localization service that checks
                   the user's language preference and feed french or english content accordingly. 
                </li>
                <li>
                  Added Golang struct tags to all backend areas feeding content to the front end,
                  so that they can be registered by the new service.
                </li>
                <li> 
                  Wrote documentation for the new localization service. 
                </li>
                <li>
                  Wrote unit and integration tests.
                </li>
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

            <SubHeading>Business Banking Mobile (2018 - 2021) </SubHeading>
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

            <SubHeading>Online Banking (2017 - 2018) </SubHeading>
            <ul>
              <li>Developed a new online banking platform using React, Redux, Babel, Webpack, Express, and Node.js.</li>
              <li>Developed responsive, accessible, and reusable React components, following atomic design principles.</li>
              <li>Implemented the e-transfer feature's front-end components and backend endpoints integrating with Interac</li>
              <li>Developed RESTful APIs using Express and microservices architecture.</li>
              <li>Built unit tests in Jest and React Testing Library.</li>
              <li>Constructed mobile end-to-end tests using Selenium.</li>
              <li>Provided on-call support and particapted in outage resolution and deployments.</li>
            </ul>

            <SubHeading>Retail Banking Mobile (2016 - 2017) </SubHeading>
            <ul>
              <li>Developed a new ATB mobile banking app using HTML5 and Cordova.</li>
              <li>Implemented account summary and bill payment UIs using HTML5, CSS, Bootstrap and SAP Mobile Platform.</li>
              <li>Built backend endpoints using Soap and XML.</li>
              <li>Used Jenkins to automate builds and deployments.</li>
              <li>Provided on-call support and particapted in outage resolution and deployments.</li>
            </ul>

            <SubHeading>ATB Flexible Pension Plan (2015 - 2016)</SubHeading>
            
            <ul>
              <li>Developed an internal .NET app to allow ATB team members to update or make changes to their pension.</li>
              <li>Tech Used: C#, ASP.NET, SQL Server, SOAP, SVN, NUnit.</li>
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
          <CompanyDesc>Digital Media and IT (DMIT) Diploma | 3.9 GPA
            <div> Edmonton, Alberta</div>
          </CompanyDesc>

          <div>Capstone: Modernized Alberta health services’ (AHS) legacy back-end to n-tier application.</div>
        </ExperienceSection>
        )
      }
    </div>
  );
}

export default Experiene;
