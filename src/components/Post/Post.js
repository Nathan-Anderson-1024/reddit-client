import React from 'react'
import './Post.css'
export default function Post({post}) {
  console.log(post)
  return (
    <div className='post-wrapper'>
      <div className='post-header'>
        <h5>{post.data.subreddit}</h5>
        <h3>{post.data.title}</h3>
      </div>
      <div className='post-body'>
        {/* {post.data.thumbnail == "image" && <img src={post.data.url} className='post-img'></img>} */}
        {post.data.thumbnail !== "self" && <img src={post.data.url} className='post-img'></img>}
      </div>
    </div>
    // map across json data from reddit
  )
}
