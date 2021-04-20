import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const App = () => {
  const test = () => {
    axios.get("/test").then((res) => {
      alert(JSON.stringify(res.data));
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={test}>Typescript </button>
      </header>
    </div>
  );
};

export default App;
