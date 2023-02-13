import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../createblog/create.scss'
import { blogx } from '../atom/blog';
import { useRecoilValue } from 'recoil';
const Create = () => {
// create states for title,content and authors
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  let [author, setAuthor] = useState('Ade');
  let blogPost = {
    title: title,
    content: content,
    author:author
  }
  let history = useNavigate();
  // let d = useRecoilValue(global);
  
  function handleSubmit(e) {
    e.preventDefault(e);
    console.log('submitted');
    axios.post('http://localhost:8000/blogs', blogPost).then((res) => {
      // console.log(res.data); // shows what was posted on db
      // console.log('your blog post has be sent');
      history('/');
    }).catch((err) => {
      console.log(err);
    })
  
  }
  return (
    <div className='create'>
      <h1> Create-Blogs</h1>
      <form onSubmit={handleSubmit}>

        <div className='title'> <label> Title</label>
          <input
            type="text"
            placeholder='Blog Tilte'
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            required


        /> </div>
        <div className='content'>
          <h3>Blog Content</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder='Blog Contents'
           onChange={(e)=> setContent(e.target.value)}
            value={content}
            required
          >

          </textarea>
        </div>
        <div className='author'>
          <label> Authors </label> <select
            name=""
            id=""
             onChange={(e)=> setAuthor(e.target.value)}
            value={author}
          >
            <option value="ade">Ade</option>
            <option value="praise">Praise</option>
            <option value="robert">Robert</option>
          </select>
        </div>
        <button>Send Blog</button>
          {/* show state changes on keypress */}
     
      </form>

    </div>
  )
}

export default Create