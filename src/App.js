import './App.css';
import styled from 'styled-components';

const ResumeWrapper = styled.div`
  margin 2rem 5rem ;
  padding: 2rem;
  @media only screen and (max-width: 650px) {
    margin 1rem 2rem ;
  }
  border-radius: 0.5rem;
  opacity: 90%;
  background-image: linear-gradient(purple, orange);
  font-family: monospace;
`

const Description = styled.div`
  letter-spacing: 0.3rem;
`

const ResumeBody = styled.div`
  font-size: 1rem;
  padding: 0rem 1.7rem;
  opacity: 0;
  animation: fadeIn ease 4s;
  animation-fill-mode: forwards;
  animation-delay: 3s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`

const Caret = styled.div`
  float: left;
  padding-right: 0.5rem;
  font-size: 2rem;
`

const Title = styled.div`
  font-size: 2rem;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  border-right: 1.5rem transparent solid;
  animation: animated-text 1s steps(12,end) 1s 1 normal both,
             animated-cursor 650ms steps(29,end) 5;

  @keyframes animated-text{
    from{width: 0;}
    to{width: 19rem;}
  }

  @keyframes animated-cursor{
    from{border-color: orange;}
    to{border-color: transparent);}
  }
`

function App() {
  return (
    <div className="App-body">
      <ResumeWrapper>
        <Caret>></Caret>
        <Title>
          Leila Elkhalidy
        </Title>
        <ResumeBody>
          <Description>Full Stack Developer</Description>


          {
              // <img src={gitHubIcon} alt="Git Hub" width="8%" height="8%" />
          }


            <h2>Hi there, I'm Leila. 👋</h2>
            <p>I create simple, elegant solutions for complex problems. I started my coding journey at age 10 when I discovered
            I could modify the source code to my neopets page. Fast forward to today: I’m building customer facing web and mobile
             banking solutions at ATB Financial. As the Lead Developer on the Business Banking Mobile project, I’m continuously
             striving to improve code quality, testing coverage, and delivery cycles to better serve our customers. I’m naturally
             curious, I love working on teams, and I’m one of those people who puts ketchup on their poutine. 🤭</p>

            <h2>Tech Stack 📚</h2>
            <p>JavaScript/ES6, React, Redux, Bable, Webpack, Node.js, Express, Cordova, JSON, XML, CSS, SOAP, REST, Json Web Tokens (JWT),
            Python, Pytes, Jest, Experitest (Mobile test automation), MongoDB, Java, Git, GitLab, Bitrise, Jenkins, Bitbucket, auth0</p>

            <h2>Development Practices 👩🏻‍💻</h2>
            <p>Agile/SCRUM/Kanban, Trunk Based Development, Continuous Integration (CI), Continuous Deployment (CD), Feature Toggling,
            Microservice Architecture, Unit Testing, Test Automation, Paired Programming, Code Reviews, Test Driven Development</p>

            <h2>Experience 👔</h2>
            <h4>Senior Software Developer, ATB Financial</h4>
            <p>May 2013 - Present, Edmonton AB</p>

            <h5> Business Banking Mobile  - Lead Developer, 2018 - present </h5>
              <li>Business Banking Mobile - Lead Developer, 2018 - present</li>
              <li>Converted ATB’s Business Online platform into an iOS and Android app using Cordova</li>
              <li>Developed biometric and 2FA authentication flows using JWT and Auth0</li>
              <li>Developed in-app remote cheque deposits (leveraging native device camera and image analysis technologies)</li>
              <li>Developed RESTful APIs using Express and microservice architecture</li>
              <li>Built unit test in Jest and React Testing Library</li>
              <li>Built mobile e2e tests - using Selenium and Experitest - running on physical devices stored in the cloud</li>
              <li>Built API test using Pytest</li>
              <li>Configured CI/CD pipelines in GitLab and BitRise</li>
              <li>Developed responsive, accessible and reusable react components</li>
              <li>Performed diligent and constructive code reviews</li>
              <li>Mentored and provided knowledge transfers to new devs</li>

            <h5> Online Banking, 2017 - 2018 </h5>
              <li>Full stack development of a React web applications using Redux, Babel, Webpack, ES6, and Node.js</li>
              <li>Developed responsive, accessible, and reusable react components</li>
              <li>Developed e-transfer, bill payment, and account summary modules</li>
              <li>Developed RESTful APIs using Express and microservice architecture</li>
              <li>Built unit test in Jest and React Testing Library</li>
              <li>Built e2e tests in Selenium</li>
              <li>Built API test using Pytest</li>
              <li>Configured CI/CD pipelines in GitLab and BitRise</li>

        </ResumeBody>
      </ResumeWrapper>
    </div>
  );
}

export default App;
