import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSearch, selectLoading, selectSearchData, selectSearchTerm } from '../../features/search/searchSlice';
import Post from '../Post/Post';
import './SearchPage.css'

export default function SearchPage() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const searchedPosts = useSelector(selectSearchData);
    const isLoading = useSelector(selectLoading);

    const urlQuery = useParams();
    useEffect(() => {
        console.log(searchTerm)
        dispatch(fetchSearch(searchTerm))
        if (searchTerm === "") {
            console.log('search empty')
            dispatch(fetchSearch(urlQuery.term))
        }
    }, [dispatch, searchTerm, urlQuery])

  return (
    <div className='search-pg-wrapper'>
        <h1>Search Results</h1>
        <hr className='break'></hr>
        {isLoading && <h2>Loading...</h2>}
        {searchedPosts.map((post) => {
            return <Post post={post} key={post.data.id}></Post>
        })}
    </div>
  )
}
