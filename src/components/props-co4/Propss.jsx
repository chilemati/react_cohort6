import React from 'react'



const Propss = ({names, sum}) => {
  let c = 0;
  function increase() {
    c++;
    console.log('c = ', c);
    return c;
  }
  
  return (
      <div>
      <h1>My name is {names}</h1>
      <h1>{sum(5, 8)}</h1>
      <h1> C = {c} </h1>
      <button onClick={()=> increase()}>++</button>
    </div>
  )
}

export default Propss