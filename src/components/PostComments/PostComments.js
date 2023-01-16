import React, { useEffect, useState } from 'react'
import './PostComments.css'
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading, selectPopularData } from '../../features/popular/popularSlice';
import { useParams } from 'react-router-dom';

export default function PostComments() {
    const posts = useSelector(selectPopularData)
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [singlePost, setSinglePost] = useState({})
    

    const findPost = () => {
        const postIndex = posts.findIndex((post) => {
            return post.data.id === id
        })
        setSinglePost(posts[postIndex].data)
        setLoading(false)
        console.log(singlePost)
        return singlePost
    }
    useEffect(() => {
        try {
            findPost()
        } catch (err) {
            return <h1>An error has occured. Please reload the page.</h1>
        }
        
    }, [])

    if (loading === true) {
        return <h1>Loading...</h1>
    }

  return (
    <div className='comment-wrapper'>
        <div>
          <h1>{singlePost.title}</h1>
          {singlePost.url.includes('.jpg') && <img src={singlePost.url} className='comment-img' alt='related to post'></img>}
          <hr className='break'></hr>
        </div>
        <form className='comment-form'>
            <textarea rows={15} cols={100} placeholder='What are your thoughts?'></textarea>
            <input type='submit' className='submit-btn' value='Comment'></input>
        </form>
        <hr className='break'></hr>
        <div className='comment-section'>
            comments
        </div>
    </div>
  )
}
