import { useEffect } from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/navbar/Navbar';
import './App.css';
import { useDispatch } from 'react-redux';
import { getPopular, selectPopularData } from '../features/popular/popularSlice';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PostComments from '../components/PostComments/PostComments';


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
      <Routes>
        <Route path='/'>
          <Route index element={<Home></Home>}></Route>
          <Route path='/posts/:id' element={<PostComments></PostComments>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
