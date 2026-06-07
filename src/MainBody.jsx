import React, { useState } from 'react'
import "./App.css"
import Basic from "./Basic";
import Intermediate from "./Intermediate";
import Advanced from './Advanced';

const MainBody = () => {
  const[basic,setBasic]=useState(false);
  const[intermediate,setIntermediate]=useState(false);
  const[advanced,setAdvanced]=useState(false);
  if(basic){
    return <Basic onBack={() => setBasic(false)}/>
  }
  if(intermediate){
    return <Intermediate onBack={() => setIntermediate(false)} />
  }
  if(advanced){
    return <Advanced onBack={() => setAdvanced(false)} />
  }

  return (
    <div className='mainbody-div'>
      <div className='main-div'>
        <h3 className='heading3'>Basic React</h3>
        <h5 className='heading5'>Total 9 programs</h5>
        <button className="viewB" onClick={() => setBasic(true)}>View</button>
      </div>
      <div className='main-div'>
        <h3 className='heading3'>Intermediate React</h3>
        <h5 className='heading5'>Total 5 programs</h5>
        <button className="viewB" onClick={() => setIntermediate(true)}>View</button>
      </div>
      <div className='main-div'>
        <h3 className='heading3'>Advanced React</h3>
        <h5 className='heading5'>Total 3 programs</h5>
        <button className="viewB" onClick={() => setAdvanced(true)}>View</button>
      </div>
    </div>
  )
}

export default MainBody
