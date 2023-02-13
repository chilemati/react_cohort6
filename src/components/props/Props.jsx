import React from 'react'

const Props = ({ color, sum }) => {
    let c = 0;
    function increase() {
        c++;
        console.log('c = ', c);
        return c;
    }
  return (
      <div>
          <p> I have a {color} car</p>
          <h1> The result of add function from app.js is {sum(2, 5)}</h1>
          <h3>c result is: {c}</h3>
          <button onClick={()=> increase()}>++</button>
    </div>
  )
}

export default Props