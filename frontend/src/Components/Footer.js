import React from 'react';
import Footer from '../Styles/Footer.css';
function footer(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12' style={{fontSize:"larger"}}>
            Reach out to us at: <a href="VedaVerse@gmail.com">VedaVerse@gmail.com</a>
            </div>
            <div className='col-lg-6 col-md-12' style={{fontSize:"large"}}>
            Our Team: <br /> 
            <ul><li>Harsh Pawar</li>
               <li>Naman Vashistha</li>
               <li>Shristi Shetty</li>
               <li>Vidhi Vaishnav</li></ul>
            </div>
            </div>
    </div>
  );
}
 
export default footer;