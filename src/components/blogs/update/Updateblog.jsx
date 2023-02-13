import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../createblog/create.scss'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Updateblog = ({hide,blogs}) => {
// create states for title,content and authors
  let [title, setTitle] = useState(blogs[0].title);
  let [content, setContent] = useState(blogs[0].content);
  let [author, setAuthor] = useState(blogs[0].author);
  const notify = () => toast('Blog Update Successfully!');
  const redirect = () => toast('You will be redirected to the Homepage in 4700 seconds!');
  const [disabled, setDisabled] = useState(false);

  let blogPost = {
    title: title,
    content: content,
    author:author
  }
 console.log(blogs[0].title)
  let history = useNavigate();
  // let d = useRecoilValue(global);
  // console.log('blogs from blogdetatil is: ', blogs);
  function handleSubmit(e) {
    e.preventDefault(e);
    console.log('submitted');
    axios.patch(`http://localhost:8000/blogs/${blogs[0].id}`, blogPost).then((res) => {
      setDisabled(true);
      // console.log(res.data); // shows what was posted on db
      // console.log('your blog post has be sent');
      notify();
      redirect();
      setTimeout(() => {
        history('/');
      }, 4700);
    }).catch((err) => {
      console.log(err);
    })
  
  }
  return (
    <div className='create'>
      <h1> Update-Blogs</h1>
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
        {!disabled && <button>Update Blog</button>}
        <button onClick={()=> hide()}> Back </button>
          {/* show state changes on keypress */}
     
      </form>
      <ToastContainer />
    </div>
  )
}

export default Updateblog