import React, { useEffect, useState } from 'react'
import '../bloghome/home.scss'
import {Link} from 'react-router-dom'
import Blogtemp from '../blogtemp/Blogtemp';
import useFetch from '../customHook/useFetch';
import Loader from '../loader/Loader';
import {AiOutlineHeart} from 'react-icons/ai'
import {RiHomeHeartLine,RiMessage2Fill} from 'react-icons/ri'
const Home = ({max}) => {
  const { blogs,loading } = useFetch('http://localhost:8000/blogs');

  return (
      <div>
      <h1 align='center'> Welcome to Home Page <AiOutlineHeart /> <RiHomeHeartLine /> <RiMessage2Fill /> </h1>
      
      {/* to display blogs, enter into javascript environment with {} */}
      {
        loading &&  <Loader />
      }
      {
        !loading &&
        <Blogtemp blogs={blogs} max={100} />}
    </div>
  )
}

export default Home