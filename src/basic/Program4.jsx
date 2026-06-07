import React from 'react'
import "../App.css"
import { BsArrowLeft } from 'react-icons/bs';


const Program4= ({onBack}) => {
      return (
        <div>
          <span className='span1'>
          <button onClick={onBack} className='backButton'><BsArrowLeft size={20} /></button>
          <h3 className='heading3'>Program4</h3>
          </span>
          <div className='programs-body'>
            <p className='note'>Note : This module has no DIYs.</p>
          </div>
        </div>
      )
    }
export default Program4