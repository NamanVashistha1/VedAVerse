import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import styles from './login.css'

export default function Login() {

    const [credentials, setcredentials] = useState({ email: "", password: "" })

    // When a user checks in:
    const checkIn = () => {
        const today = new Date().toISOString().split('T')[0];
        const lastCheckInDate = localStorage.getItem('lastCheckInDate');

        if (lastCheckInDate === today) {
            // User has already checked in today.
            alert('You have already checked in today.');
        } else {
            // User is checking in for the first time today.
            localStorage.setItem('lastCheckInDate', today);
            const streak = parseInt(localStorage.getItem('streak') || 0);
            console.log(localStorage.setItem('streak', streak + 1));

            // Reward the user with one coin.
            const coins = parseInt(localStorage.getItem('coins') || 0);
            localStorage.setItem('coins', coins + 1);
            alert('You earned 1 coin for checking in!');
        }
    };

   let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/loginUser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json()
        // console.log(json);


        if (!json.success)
            alert('Enter Correct Credentials');

        if (json.success) {
            navigate("/Survey", {state: 124 });
            localStorage.setItem("authToken", json.authToken);
            // localStorage.setItem("Email",  credentials.email );
            console.log(localStorage.getItem("authToken"));
            checkIn()
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
    
            <div className="container" style={{display:"flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh"}}>
             <div class="card" style={{width: "300px",
	backgroundColor: "rgb(69 69 72 / 87%)",
	padding: "20px",	borderRadius: "10px",
	borderTop: "4px solid #19d4ca",
	boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"}}>
                 <h3 class="title" style={{color:"#19d4ca"}}>Sign In</h3>

                {/* <form onSubmit={handleSubmit}> */}
                <form onSubmit={handleSubmit} method="get">

                    <div className="form-group">
                                              <label htmlFor="exampleInputEmail1" style={{color:"white"}}>Email address</label>

                        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChanges} />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="exampleInputPassword1" style={{color:"white"}}>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChanges} />
                    </div>
                    <div class="buttons my-4">
                    {/* <Link to='/Survey' type="submit" className='btn btn-outline-info mx-2'>Submit</Link> */}
                    <button type="submit" className="mx-2 btn btn-outline-info">Submit</button>

{/* <button type="submit" className="m-3 btn btn-success">Submit</button> */}
                    <Link to='/SignUp' className='btn btn-outline-warning'>New User</Link>
                    </div>
                    
                </form>
                </div>
            </div>
            </div>
       
    )
}


