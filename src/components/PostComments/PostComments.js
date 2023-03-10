import React, { useCallback, useEffect, useState } from 'react'
import './PostComments.css'
import { useSelector } from 'react-redux';
import { selectPopularData } from '../../features/popular/popularSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { addComment, selectComments } from '../../features/comment/commentSlice';
import { useDispatch } from 'react-redux';
export default function PostComments() {
    const posts = useSelector(selectPopularData)
    const { id } = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [singlePost, setSinglePost] = useState({})
    const [text, setText] = useState("")
    const comments = useSelector(selectComments)
    let navigate = useNavigate()

    
    const findPostInfo = useCallback(() => {
        const postIndex = posts.findIndex((post) => {
            return post.data.id === id
        })
        setSinglePost(posts[postIndex].data)
        return singlePost
    }, [id, posts, singlePost])

    useEffect(() => {
        try {
            findPostInfo()
            console.log('Finding Post')
            //dispatch(getComments('r/Damnthatsinteresting/comments/10do2pl/apes_dont_ask_questions_while_apes_can_learn_sign/'))
            setLoading(false)
        } catch (err) {
            setError(true)
            console.log(error)
            navigate('/')
            
        }
        
    }, [findPostInfo, error, navigate])
    
    const handleInputSubmit = (event) => {
        setText(event)
    }
    const handleDefault = (event) => {
        event.preventDefault()
    }
    const submitToStore = () => {
        console.log('submitting to store')
        dispatch(addComment(text))
        setText("")
    }

    if (loading === true) {
        return <h1>Loading...</h1>
    }

    

  return (
    <div className='comment-wrapper'>
        <div className='comment-title'>
          <h1>{singlePost.title}</h1>
          {singlePost.url.includes('.jpg') && <img src={singlePost.url} className='comment-img' alt='related to post'></img>}
          <hr className='break'></hr>
        </div>
        <form className='comment-form' onSubmit={handleDefault}>
            <textarea rows={15} cols={100} placeholder='What are your thoughts?' id='text-box' onChange={(event) => handleInputSubmit(event.target.value)} value={text}></textarea>
            <input type='submit' className='submit-btn' value='Comment' htmlFor='text-box' onClick={submitToStore}></input>
        </form>
        <hr className='break'></hr>
        <div className='comment-section'>
            {comments.length > 0 && comments.map((comment, index) => {
                return (
                    <h4 key={index}>{comment}</h4>
                )
            })}
            
        </div>
    </div>
  )
}
