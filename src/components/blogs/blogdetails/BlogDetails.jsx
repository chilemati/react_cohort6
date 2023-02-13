import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import Blogtemp from '../blogtemp/Blogtemp';
import useFetch from '../customHook/useFetch';
import '../blogdetails/blogdetails.scss'
import axios from 'axios';
import Updateblog from '../update/Updateblog';


const BlogDetails = () => {
  let { id } = useParams(); 
  let history = useNavigate();
  let [showUpdate, setshowUpdate] = useState(false);
  function show() {
    setshowUpdate(true);
  }
  function hide() {
    setshowUpdate(false);
  }
 
    // using useFetch to get blogs data, so that <Blogtemp /> will work well
    const { blogs } = useFetch('http://localhost:8000/blogs'); // asynchronous request, meanin
    //it takes time or is a promise
  function deleteBlog() { // this function deletes a blog
    axios.delete(`http://localhost:8000/blogs/${id}`).then(() => {
      console.log(`blog with id of ${id} was deleted successfully !`);
      history('/');
      
    }).catch((err) => {
      console.log(`unable to delete this blog due to: ${err}`);
    })
  }
  return (
      <div>
          {/* <h1>BlogDetails-{id}</h1> */}
     
      {
        !showUpdate &&

        <Blogtemp blogs={blogs && blogs.filter((blog) => blog.id == id)} max={10000} />
      }
        
      {
        showUpdate && <Updateblog
          hide={hide}
          blogs={blogs && blogs.filter((blog) => blog.id == id)} />
        } 
      
      {
        !showUpdate &&
        <div className="actions">
        <button onClick={() => deleteBlog()}>Delete</button>
        <button onClick={() => show()} >Update</button>
      </div>
    
      }
      
    </div>
  )
}

export default BlogDetails