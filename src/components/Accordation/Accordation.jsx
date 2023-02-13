import React from 'react'
import { useState } from 'react'
import '../Accordation/accordation.scss'
const Accordation = () => {
    const [drop1, setDrop1] = useState('none');
    const [drop2, setDrop2] = useState('none');
    const [drop3, setDrop3] = useState('none');
    const [stylez, setStylez] = useState({
         backgroundColor: 'brown',
    color: 'gold',
    });
    function toggleDrop1() {
        if (drop1 == 'none') {
            setDrop1('block');
            setDrop2('none');
            setDrop3('none');
            setStylez({ color:'white', backgroundColor: 'brown'});
        }
        else {
            setDrop1('none');
        }
    }
    function toggleDrop2() {
        if (drop2 == 'none') {
            setDrop2('block');
            setDrop1('none');
            setDrop3('none');
        }
        else {
            setDrop2('none');
        }
    }
    function toggleDrop3() {
        if (drop3 == 'none') {
            setDrop3('block');
            setDrop2('none');
            setDrop1('none');
        }
        else {
            setDrop3('none');
        }
    }
  

  return (
      <div>
          <h1>Accordation</h1>
          <div className="accordation" style={stylez}>
              <h2 className="title" onClick={()=> toggleDrop1() } >HTML</h2>
              <p className="content" style={{display: `${drop1}`}} >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero fugit commodi eaque ea delectus dicta modi, odit sunt debitis ratione aut molestiae id exercitationem assumenda dignissimos tempora fuga voluptates?
              </p>
              <h2 className="title" onClick={()=> toggleDrop2()} >CSS</h2>
              <p className="content" style={{display: `${drop2}`}} >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero fugit commodi eaque ea delectus dicta modi, odit sunt debitis ratione aut molestiae id exercitationem assumenda dignissimos tempora fuga voluptates?
              </p>
              <h2 className="title" onClick={()=> toggleDrop3()} >JAVASCRIPT</h2>
              <p className="content" style={{display: `${drop3}`}} >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti libero fugit commodi eaque ea delectus dicta modi, odit sunt debitis ratione aut molestiae id exercitationem assumenda dignissimos tempora fuga voluptates?
              </p>
          </div>
    </div>
  )
}

export default Accordation