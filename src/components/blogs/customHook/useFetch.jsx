import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import blog from '../../blogs/atom/blog'
import { useRecoilState } from 'recoil';
const useFetch = (url) => {
     // create a blog state
  // const [blogs, setBlogs] = useState(null);
  let [blogs, setBlogs] = useRecoilState(blog);
  let [loading, setLoading] = useState(true);

  // we use useffect to get the our data from json once the page load only once
  useEffect(() => {
    setTimeout(() => {
      axios.get(url).then((res) => {
      // console.log('res is: ', res.data); // condition render in react
    res.data &&  setBlogs(res.data);
    // res.data &&  console.log('blogs is ', blogs);
        setLoading(false);

    }).catch((err) => {
      console.log('err is : ', err);
    })
    },1500)
   
  },[])
  return {blogs,loading}
}

export default useFetch