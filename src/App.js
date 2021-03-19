import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  align: right;
  padding: 2rem;
  font-family: monospace;
`

const ResumeBody = styled.div`
  padding: 2rem;
  opacity: 0;
  animation: fadeIn ease 3s;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`

const Caret = styled.div`
  float: left;
  padding-right: 0.5rem;
`

const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: .1em;
  padding-right: 0.15rem;
  border-right: 1rem transparent solid;
  animation: animated-text .95s steps(12,end) 1s 1 normal both,
             animated-cursor 650ms steps(29,end) 5;

  @keyframes animated-text{
    from{width: 0;}
    to{width: 10.5rem;}
  }

  @keyframes animated-cursor{
    from{border-color: pink;}
    to{border-color: transparent);}
  }
`

function App() {
  return (
    <div className="App-body">
      <header className="App-header">
        <Wrapper>
          <Caret>></Caret>
          <Title>
            Luminaire
          </Title>
          <ResumeBody>
            [insert resume body here]
          </ResumeBody>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
