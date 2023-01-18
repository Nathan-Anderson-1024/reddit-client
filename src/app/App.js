import { useEffect } from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/navbar/Navbar';
import './App.css';
import { useDispatch } from 'react-redux';
import { getPopular, selectPopularData } from '../features/popular/popularSlice';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PostComments from '../components/PostComments/PostComments';
import NotFound from '../components/NotFound/NotFound';
import { useNavigate } from 'react-router-dom';
import SearchPage from '../components/searchPage/SearchPage';

function App() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isLoading, isError } = useSelector(selectPopularData)


  useEffect(() => {
    console.log('in use effect')
    dispatch(getPopular())
    let timeoutID;
    if (isLoading) {
      console.log('loading')
      timeoutID = setTimeout(() => {
        navigate('/')
      }, 5000)
    }
    
    return () => clearTimeout(timeoutID)
    
  }, [dispatch, isLoading, navigate])


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
          <Route path=':id' element={<PostComments></PostComments>}></Route>
        </Route>
        <Route path='/search/:term' element={<SearchPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
