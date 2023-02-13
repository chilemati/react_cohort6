import React from 'react'
import {Link} from 'react-router-dom'
const Errorpage = () => {
  return (
      <div>
          <h1>404 page not found</h1>
    <Link to={'/'}> <h3>Go back Home </h3> </Link>
    </div>
  )
}

export default Errorpage