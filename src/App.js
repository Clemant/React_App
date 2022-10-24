import logo from "./logo.svg";
import "./App.css";
import images from "./images/femme-sexy.webp";
import data from "./data/database";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          src={images}
          className="App-logo"
          alt="images"
          width={450}
          height={300}
        />
        <p>
          {data.map((element, index) => {
            return (
              <div key={index}>
                <p>{element.element}</p>
                <p>{element.name}</p>
                <p>{element.job}</p>
              </div>
            );
          })}
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

export default App;
