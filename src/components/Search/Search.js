import React, { useRef, useState } from 'react'
import './Search.css'
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../features/search/searchSlice';
import { Link } from 'react-router-dom';

export default function Search() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const searchRef = useRef("");
    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }

  return (
    <div className='search-wrapper'>
        <input className='search-bar' ref={searchRef} onChange={(e) => handleSearchInput(e)} type='text' placeholder='Search'></input>
        <button className='search-btn' onClick={() => dispatch(addSearch(search))}>
            <Link className='search-link' to={`/search/${search}`}>
                <Icon icon="ph:magnifying-glass-bold" className='search-icon' />
            </Link>
        </button>
        
    </div>
  )
}
