import React from 'react'
import { useParams } from 'react-router-dom'

function Singelblogs() {
    const {blogsId} = useParams();
  return (
    <div>
        <h1>Welcome To SingeBlogs</h1>
        <p>Number Blogs : {blogsId}</p>
        <Link to={"/blogs"}>Go To Blogs Page</Link>
    </div>
  )
}

export default Singelblogs