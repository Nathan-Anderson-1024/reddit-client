import { useEffect } from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/navbar/Navbar';
import './App.css';

function App() {
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const json = await response.json()
    console.log(json.data.children)
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
