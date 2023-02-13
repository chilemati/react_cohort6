import React from 'react'
import { useState } from 'react'
import {demin,coin, addcoin } from '../hooks/global'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
const UseState = () => {
    const [c, setC] = useState(0);
    const [min, setMin] = useRecoilState(demin);
    const [coins, addCoins] = useRecoilState(coin);
    
    
    function increase() {
        setC(c + 1);
    }
    function decrease() {
        setC(c - 1);
    }

    function increaseCoins() {
        addCoins(coins + 1);
    }

    function addMin() {
        setMin(min + 1);
    }

   
  return (
      <div>
          <h1>Count: {c}</h1>
          <button onClick={()=> increase()}>++</button>
          <button onClick={() => decrease()}>--</button>
          <h1>Count Up: {c} </h1>
          <hr />
          <h2>demin from useState (useRecoilState was used because we need the set function): {min} </h2>
          <button onClick={()=> addMin()}> increase min</button>

          <hr />
          <h1>coin: {coins} </h1> 
          <button onClick={()=>increaseCoins()} >Increase coin</button>
          <hr />
         
          
    </div>
  )
}

export default UseState