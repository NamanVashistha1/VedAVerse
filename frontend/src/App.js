import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";


import Knowledge from "./Pages/Knowledge";
import Survey from "./Pages/Survey";
import Reference from "./Pages/Reference";
import Roomfront from "./Pages/room_front";
import Room from "./Pages/Room";
import Signup from "./Pages/Signup";
import Login from "./Pages/login";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Knowledge" element={<Knowledge />} />
          <Route path="/Survey" element={<Survey />} />
          <Route path="/Reference" element={<Reference />} />
          <Route path="/room_front" element={<Roomfront />} />
          <Route path='/room/:roomID' element={<Room/>}></Route>
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Login" element={<Login />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
