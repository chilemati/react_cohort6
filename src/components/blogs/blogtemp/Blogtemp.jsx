import React from 'react'
import { Link } from 'react-router-dom'
const Blogtemp = ({ blogs, max }) => {
  return (

      <div>
           {
        blogs && Array.from(blogs).sort((a,b)=> b.id-a.id).map((blog) => ( // conditional rendering was applied here so that react will
        // only map when blogs have data in other to avoid error
        <div key={blog.id} className='blog-content'>
            <h1> {blog.title} </h1>
            <p> {String(blog.content).slice(0,max)} </p>
            <h6>Written by: {blog.author} </h6>
             <Link to={`/${blog.id}`}> Read More </Link>
          </div> 
        ))
      } 
    </div>
  )
}

export default Blogtemp