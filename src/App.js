import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: monospace;
  display: flex;
  flex-direction: row;
`

const Caret = styled.div`
  Flex: 0;
  padding: 0 1rem;
`

const Title = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .1em; /* Adjust as needed */
  animation: typing 5s steps(30, end), blink .75s step-end infinite;
  border-right: 1rem solid orange;
  padding-right: 0.25rem;

  @keyframes typing {
      from { width: 0% }
      to { width: 100% }
  }

  @keyframes blink {
      from, to { border-color: transparent; }
      50% { border-color: orange; }
  }
`

function App() {
  return (
    <div className="App-body">
      <header className="App-header">
        <Wrapper>
          <Caret>></Caret>
          <Title>Leila Elkhalidy</Title>
          <div></div>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
