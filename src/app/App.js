import { useEffect } from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/navbar/Navbar';
import './App.css';
import { useDispatch } from 'react-redux';
import { getPopularData, getPopular, selectPopularData } from '../features/popular/popularSlice';
import { createAsyncThunk
 } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector(selectPopularData)


  useEffect(() => {
    dispatch(getPopular())
  }, [])


  // const getData = createAsyncThunk(
  //   'popular/getPopularData',
  //   async (thunkAPI) => {
  //     const response = await fetch('https://www.reddit.com/r/popular.json')
  //     const json = await response.json()
  //     const data = await json.data.children
  //     return dispatch(getPopularData(data))
  //   }
  // )

  // const getData = async () => {
  //   const response = await fetch('https://www.reddit.com/r/popular.json')
  //   const json = await response.json()
  //   const data = await json.data.children
  //   return dispatch(getPopularData(data))
  // }
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
