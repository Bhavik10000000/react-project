import React from 'react'
import "../App.css"
import { BsArrowLeft } from 'react-icons/bs';


const Program3= ({onBack}) => {
      return (
        <div>
          <span className='span1'>
          <button onClick={onBack} className='backButton'><BsArrowLeft size={20} /></button>
          <h3 className='heading3'>Program3</h3>
          </span>
          <div className='programs-body'>
            <h3>Apartments</h3>
      <div className="main">
        <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJpg_23ao3guBbfgjqYzHzbZwafk_zK3b9w&s')", height: "300px", width: "250px", borderRadius: "5px", backgroundSize: "cover", alignContent: "end" }}>
          <section>
            <h5>Apartment</h5>
            <h6>📍Shahapur</h6>
          </section>
        </div>
        <div className="two-card">
          <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJpg_23ao3guBbfgjqYzHzbZwafk_zK3b9w&s')", height: "150px", width: "250px", borderRadius: "5px", backgroundSize: "cover", alignContent: "end" }}>
          <section>
            <h5>Apartment</h5>
            <h6>📍Shahapur</h6>
          </section>
        </div>
        <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJpg_23ao3guBbfgjqYzHzbZwafk_zK3b9w&s')", height: "150px", width: "250px", borderRadius: "5px", backgroundSize: "cover", alignContent: "end" }}>
          <section>
            <h5>Apartment</h5>
            <h6>📍Shahapur</h6>
          </section>
        </div>
        </div>
      </div>
          </div>
        </div>
      )
    }
export default Program3