import React from 'react'
import "../App.css"
import { BsArrowLeft } from 'react-icons/bs';
import Greeting from "./Greeting"
import UserProfile from './UserProfile';
const Program8= ({onBack}) => {
      return (
        <div>
          <span className='span1'>
          <button onClick={onBack} className='backButton'><BsArrowLeft size={20} /></button>
          <h3 className='heading3'>Program8</h3>
          </span>
          <div className='programs-body'>
            <p>Que 1 : Greeting function using props.</p>
            <Greeting name="Bhavik"/>
            <p>Que 2 : UserProfile function using props.</p>
            <UserProfile username="Bhavik" age={18} isAdmin={true}/>         
          </div>
        </div>
      )
    }
export default Program8