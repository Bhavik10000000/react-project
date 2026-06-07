import React from 'react'
// import "../App.css"
import { BsArrowLeft } from 'react-icons/bs';
import "./App1.css"


const Program2= ({onBack}) => {
      return (
        <div>
          <span className='span1'>
          <button onClick={onBack} className='backButton'><BsArrowLeft size={20} /></button>
          <h3 className='heading3'>Program2</h3>
          </span>
          <div className='programs-body'>
            <div className="div">
              <h2 className="h2">Login</h2>
              <h5 className="h4">Username</h5>
              <input type="text" className="input"/>
              <h5 className="h4">Password</h5>
              <input type="number" className="input"/>
              <button className="button">Login</button>
            </div>
          </div>
        </div>
      )
    }
export default Program2


      