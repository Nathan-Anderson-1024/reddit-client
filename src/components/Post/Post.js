import React from 'react'
import './Post.css'
import { Icon } from '@iconify/react';
import { incrementUpvote } from '../../features/popular/popularSlice';
import { useDispatch } from 'react-redux';
export default function Post({post}) {
  console.log(post)
  const userLink = `https://reddit.com/u/${post.data.author}`
  let postedDate = new Date(post.data.created)
  postedDate = postedDate.toLocaleTimeString()
  const comments = `https://reddit.com${post.data.permalink}`

  const dispatch = useDispatch();

  return (
    <div className='post-wrapper'>
      <div className='post-header'>
        <h1>{post.data.title}</h1>
      </div>
      <div className='post-body'>
        {post.data.url.includes('.jpg') && <img src={post.data.url} className='post-img' alt='related to post'></img>}
        {/* {!post.data.thumbnail.includes('.jpg') && <a href={post.data.url} className='post-img' alt='related to post'>Link</a>} */}
        <hr className='break'></hr>
        <div className='post-footer'>
          <div className='upvote'>
            {/* USe refs to capture post ID and then pass that post iD to the incrementUpvote reducer */}
            <button className='upvote-btn'>
              <Icon icon="material-symbols:keyboard-arrow-up" width="48" height="48" color="gray" className='up-arrow' />
            </button>
            <h5>{post.data.score}</h5>
            <button className='downvote-btn'>
              <Icon icon="material-symbols:keyboard-arrow-down" color="gray" width="48" height="48" className='dwn-arrow' />
            </button>
          </div>
          
          <p>Posted by <a href={userLink} target="_blank" className='post-by' rel="noreferrer">{post.data.author}</a></p>
          <p>Posted at {postedDate}</p>
          <div className='comments-wrapper'>
            <a href={comments} target="_blank" className='comments' rel="noreferrer">
              <Icon icon="material-symbols:comment-outline" color="gray" width="30" height="30" className='comment-icon' />
              <h5 className='num_comments'>{post.data.num_comments}</h5>
            </a>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
    // map across json data from reddit
  )
}
