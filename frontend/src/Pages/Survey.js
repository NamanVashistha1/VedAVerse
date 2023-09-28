import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


export default function Survey() {

  // console.log(localStorage.getItem('Email'));
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({ username: "", Age: " ", ongoing_prescrip: "" })

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/Surdata", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, Age: credentials.Age, ongoing_prescrip: credentials.ongoing_prescrip })
    });
    const json = await response.json()
    console.log(json);


    if (!json.success) {
      alert('Enter Correct Credentials');
    }
    if(json.success){
      navigate("/Reference");
      localStorage.setItem("username",credentials.username);

    }
  }



  const onChanges = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundColor: 'rgba(255, 129, 0, 0.62)' }}>


      <div className='container' style={{ height: '750px' }}>
        <div className='row col-12 text-center mb-5'>
          <h3>Survey Form</h3>
        </div>
        <form className="row g-3 mt-6" method='POST' onSubmit={handlesubmit}>
          <div className="col-md-6">
            <label className="form-label">Username("Username should be same as signup Username")</label>
            <input type="text" className="form-control" id="Sname" name='username' value={credentials.username} onChange={onChanges} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" id="Sage" name='Age' value={credentials.Age} onChange={onChanges} />
          </div>


          <div className="col-12">
            <label className="form-label">Ongoing Prescription</label>
            <input type="text" className="form-control" id="medicines" placeholder="Seperate names by ','" name='ongoing_prescrip' value={credentials.ongoing_prescrip} onChange={onChanges} />
          </div>
          <div className="col-12" style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-outline-primary w-50" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
};