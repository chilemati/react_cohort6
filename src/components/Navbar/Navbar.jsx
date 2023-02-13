import React, { useState } from 'react'
import '../Navbar/navbar.scss'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [color_home, setColor_home] = useState('');
  const [color_about, setColor_about] = useState('');
   let c = 0;
  function handleColor_about() {
    setColor_about('red');
    setColor_home('');
    // c++;
    // if (c % 2 == 1) {
    //  setColor('red');
    // }
    // else {
    //   setColor('');
    // }

    
  }

  function handleColor_home(){
    setColor_about('');
    setColor_home('red')
  }
  return (
      <>
          <div className="nav">
            <Link to={'/'}>  <span onClick={()=> handleColor_home()} style={{color:color_home}} >Home</span> </Link>
            <Link to={'/about'} >  <span onClick={()=> handleColor_about()} style={{color:color_about}}>About</span> </Link>
            <Link to={'/create'} >  <span>Create-Blogs</span> </Link>
          </div>
    </>
  )
}

export default Navbar