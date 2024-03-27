import React, { useEffect, useState } from 'react'
import './feedback.css'
import Navbar1 from './Navbar1';
import { useLocation } from 'react-router-dom';

function Feedback() {
  const [name,setName] = useState('');
  const [mail,setMail] = useState('');
  const [txt,setTxt] = useState('');

  const loc = useLocation();
  useEffect(() => {
    setName("")
    setMail("")
    setTxt("")
  },[loc]);

  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div className='fed-cont'>  
        <div className='fed-coun1'>
        <img src='card4.png' alt='logo' className='fed-img' />
        </div>
        <div className='fed-coun2'>
          <h1>Feedback Form </h1>
          <form method='post' action='https://formspree.io/f/myyrjazb' className='fed-form'>
            <input type='text' 
              placeholder='Enter your name' 
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} required
            />
            <input type='email' 
              placeholder='Enter your EmailID' 
              name="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)} required
            />
            <input type="text"
              placeholder='Enter text'
              name='text' 
              value={txt}
              onChange={(e) => setTxt(e.target.value)} required
            />
            <button type='submit' value="Submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Feedback