import { useEffect } from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/navbar/Navbar';
import './App.css';
import { useDispatch } from 'react-redux';
import { getPopular, selectPopularData } from '../features/popular/popularSlice';
import { useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector(selectPopularData)


  useEffect(() => {
    dispatch(getPopular())
  }, [dispatch])


  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div className='error'>
        <h1>An error occured please refresh the page.</h1>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
