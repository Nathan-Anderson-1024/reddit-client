import React from 'react'
import './Post.css'
import { Icon } from '@iconify/react';
export default function Post({post}) {
  console.log(post)
  const userLink = `https://reddit.com/u/${post.data.author}`
  let postedDate = new Date(post.data.created)
  postedDate = postedDate.toLocaleTimeString()
  const comments = `https://reddit.com${post.data.permalink}`
  return (
    <div className='post-wrapper'>
      <div className='post-header'>
        <h1>{post.data.title}</h1>
      </div>
      <div className='post-body'>
        {post.data.url.includes('.jpg') && <img src={post.data.url} className='post-img' alt='related to post'></img>}
        {/* {post.data.thumbnail !== "self" && <img src={post.data.url} className='post-img' alt='related to post'></img>} */}
        <div className='post-footer'>
          <div className='upvote'>
            <button className='upvote-btn'>
              <Icon icon="material-symbols:keyboard-arrow-up" width="48" height="48" color="black" className='up-arrow' />
            </button>
            <h5>{post.data.score}</h5>
            <button className='downvote-btn'>
              <Icon icon="material-symbols:keyboard-arrow-down" color="black" width="48" height="48" className='dwn-arrow' />
            </button>
          </div>
          
          <p>Posted by <a href={userLink} target="_blank" className='post-by' rel="noreferrer">{post.data.author}</a></p>
          <p>Posted at {postedDate}</p>
          <div className='comments-wrapper'>
            <a href={comments} target="_blank" className='comments' rel="noreferrer">
              <Icon icon="material-symbols:comment-outline" color="black" width="30" height="30" />
              {post.data.num_comments}
            </a>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
    // map across json data from reddit
  )
}
