import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){

  const [Countries,setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
  },[])
  return (
    <div>
      <h1>Visiting Every Countries Of The World...</h1>
      <p>Available Countries : {Countries.length}</p>
    </div>
  )
}

export default App;
