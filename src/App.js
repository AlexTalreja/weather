import logo from './logo.svg';
import './App.css';
import './Weather.js'
import Weather from './Weather.js';



function App() {
  
return (
  <div>
    <h1> Welcome to Alex's Weather and News Site!</h1>

    <Weather/>

  </div>
  
);
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Weather App</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
