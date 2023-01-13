import React from 'react'
import './Post.css'
import { Icon } from '@iconify/react';
export default function Post({post}) {
  console.log(post)
  const userLink = `reddit.com/u/${post.data.author}`
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
          <h6>{post.data.ups}</h6>
          <button>
            <Icon icon="material-symbols:keyboard-arrow-down" color="black" width="30" height="30" />
          </button>
          <p>Posted by <a href={userLink}>{post.data.author}</a></p>
          
          
          
        </div>
      </div>
    </div>
    // map across json data from reddit
  )
}
