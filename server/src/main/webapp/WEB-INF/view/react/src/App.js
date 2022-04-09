import logo from './logo.svg';
import './App.css';
import TestComponent from "./TestComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TestComponent />
          Hello World!
        </a>
      </header>
    </div>
  );
}

export default App;
