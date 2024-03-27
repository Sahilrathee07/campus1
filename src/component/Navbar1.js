import React from 'react'
import './navbar1.css';
import { NavLink , useNavigate } from 'react-router-dom';

export function Navbar1() {
    const history = useNavigate();
    return (
      <>
          <div className='navbar11'>
            <img className='nav-img' src="chlogo.svg" alt='logo' />
            <ul>
              <li><NavLink className="navL" to="/home" exact>Home</NavLink></li>
              <li><NavLink className="navL" to="/tutor" >Teachers</NavLink></li>
              <li><NavLink className="navL" to="/feedback" >Feedback</NavLink></li>
            </ul>
          <div className='nav3'>
              <div className='nav4'>
                  <button onClick={()=> history('/user')}><img src='user1.png' alt='user-logo'/>
                  <p><b>&nbsp;&nbsp;My Profile</b></p></button>
              </div>
              <ul>
                <button onClick={()=> history('/')}>Sign Out</button>
              </ul>
          </div>
        </div>
      </>
    )
}
  

export default Navbar1