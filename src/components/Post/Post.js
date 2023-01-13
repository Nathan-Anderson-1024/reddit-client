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
        {/* {post.data.thumbnail == "image" && <img src={post.data.url} className='post-img'></img>} */}
        {post.data.thumbnail !== "self" && <img src={post.data.url} className='post-img'></img>}
        <div className='post-footer'>
          <button>
            <Icon icon="material-symbols:keyboard-arrow-up" width="30" height="30" color="black" />
          </button>
          <h6>{post.data.score}</h6>
          <button>
            <Icon icon="material-symbols:keyboard-arrow-down" color="black" width="30" height="30" />
          </button>
          <p>Posted by <a href={userLink} target="_blank">{post.data.author}</a></p>
          <p>Posted at {postedDate}</p>
          <a href={comments} target="_blank"><Icon icon="material-symbols:comment-outline" color="black" width="30" height="30" /></a>
          
          
          
        </div>
      </div>
    </div>
    // map across json data from reddit
  )
}
