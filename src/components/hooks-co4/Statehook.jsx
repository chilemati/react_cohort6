import React from 'react'
// import useState hook
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {demin} from '../hooks/global'

const Statehook = () => {
    // how to use the useState
    const [count, setCount] = useState(0);
    // const [min, setMin] = useRecoilState(demin)
    let min = useRecoilValue(demin);

    // function to update count using setCount
    function increase() {
        setCount(count + 1);
    }
  return (
      <div>
          <h1>Count: {count} </h1>
          <button onClick={() => increase()}>++</button>
          <hr />
          <h1>demin atom got with useRecoilValue, since we just need only the value : {min} </h1>
       
      </div>
  )
}

export default Statehook