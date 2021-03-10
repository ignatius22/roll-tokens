// import logo from './logo.svg';
import React,{useEffect,useState} from 'react'
import './App.css';
import Homepage from './components/Homepage/Homepage';


function App() {

const [token, setToken] = useState(0);

    useEffect(() => {
  fetch('https://api.tryroll.com/v2/tokens')
    .then((response) => response.json())
    .then((json) =>
      console.log(json.map((s) => console.log(s.logo)))
    );
    },[]);

  return (
    <div className="App">
      <Homepage />
      <p>{token}</p>
      <button onClick={() => setToken(token + 1)}>click</button>
    </div>
  );
}

export default App;
