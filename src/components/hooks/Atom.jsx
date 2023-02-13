import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {addcoin, demin } from './global.js';



const Atom = () => {
    let [min, setMin] = useRecoilState(demin);
    let d = useRecoilValue(addcoin);
    function decreaseMin() {
        setMin(min - 1);  
    }

  return (
      <div>
          <h1> Min : {min} </h1>
          <button onClick={() => decreaseMin()}> -- </button>
          <hr />
     <h1> selector modified coin : {d} </h1>
      </div>
  )
}

export default Atom