import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Doctor from "./img/doctor.jpg"
// import "../Styles/vc.css";

function Home() {
    const [ roomID , setRoomID] = useState();
    const navigate = useNavigate();
    const handleJoin = () => {
        navigate(`/room/${roomID}`)

    }
  return (
    <div >
      <div className='left-div'>
      <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">One on One Consultation</p>
          <h2 className="text-title">
           Free first appointment
          </h2>
          </div>

          <div className='right-div'>
      <div className="hero-image-section">
          {/* <img className="hero-image1" src={Doctor} alt="Doctor" /> */}
        
        <div className='input'>
          <div className='content'>
        <input placeholder='Enter Meet Name' type='text' value={ roomID} onChange={(e) =>setRoomID(e.target.value)}></input>
        <button
            className="text-appointment-btn"
            type="button"
            onClick={handleJoin}
          >Join</button>
          </div>
        </div>
        </div>
        </div>

          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Home