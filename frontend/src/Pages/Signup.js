import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const Navigate = useNavigate() 

    const [credentials, setcredentials] = useState({ username: "", email: "", password: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/createUser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password})
        });
        const json =await response.json()
        console.log(json);


        if(!json.success)
        alert('Enter Correct Credentials');
    
        if(json.success){
            alert('User created successfully!');
            Navigate("/Login")


        }
        
    }

    const onChanges = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div style={{margin: "0",
          padding: 0,
          backgroundColor: "#ff81009e",
          color: "#fff",
          fontFamily: "Arial, sans-serif" }}>
            <div className='container' style={{display:"flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh"}}>
                 <div class="card" style={{width: "300px",
	backgroundColor: "rgb(69 69 72 / 87%)",
	padding: "20px",	borderRadius: "10px",
	borderTop: "4px solid #19d4ca",
	boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"}}>
                 <h3 class="title" style={{color:"#19d4ca"}}>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-2">
                        <label htmlFor="Name" style={{color:"white"}}>Username</label>
                        <input type="text" className="form-control" placeholder="Enter Name" name='username' value={credentials.username} onChange={onChanges} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" style={{color:"white"}}>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChanges} />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="exampleInputPassword1" style={{color:"white"}}>Password</label>
                        <input type="password" className="form-control " id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChanges} />
                    </div>
                    <div class="buttons my-4">
                    {/* <Link to='/Login' type="submit" className='m-3 btn btn-info'>Submit</Link> */}

                    <button type="submit" className="mx-2 btn btn-outline-info">Submit</button>
                    <Link to='/Login' className=' btn btn-outline-success'>Already a User</Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;