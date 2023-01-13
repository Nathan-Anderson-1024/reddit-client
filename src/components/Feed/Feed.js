import React from 'react'
import Post from '../Post/Post'
import { useSelector } from 'react-redux'
import { selectPopularData } from '../../features/popular/popularSlice'

export default function Feed() {
  const posts = useSelector(selectPopularData)
  return (
    <div>
        {posts.map((post) => {
          return <Post post={post}></Post>
        })}
    </div>
  )
}
