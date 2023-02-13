import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const UseEffect = () => {
    const [up, setUp] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setUp(up + 1);
        }, 1000);
    }, );
  return (
      <div>
          <h1>Count Up: { up}</h1>
    </div>
  )
}

export default UseEffect