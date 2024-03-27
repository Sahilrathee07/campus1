import React from 'react'
import './home.css';
import Navbar1 from './Navbar1';
//import { useLocation  } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

export default function Home(props) {
  //const history = useNavigate();
  //const location = useLocation();
  
  const src1 = 'card1.jpg';
  const src2 = 'card2.png';
  const src3 = 'health.jpg';
  const src4 = 'announvement.png';

  const link1 = "/lobby";
  //const link2 = "/room/:roomId";
  const link3 = "/mental"
  const link4 = "/anouncement";

  return (
    <>
      <div>
          <Navbar1 /> 
      </div>

      {/* <h1>Welcome {location.state.name}</h1> */}

      <div className='part1'>
          <div className='part2'>
              <h1>Welcome to CampusHub</h1> 
              <br/>
              <h2>Your Gateway to Academic Excellence and Well-being!</h2>
              <hr />
              <h3>CampusHub is more than just a website; it's a transformative platform designed 
                  to elevate your collegiate experience. Seamlessly integrating a range of innovative
                  features, CampusHub caters to the diverse needs of students, prioritizing academic 
                  success, mental health, safety, and community engagement.</h3>
          </div>
          <div className='part3'>
              <div>
                  <Card1 source={src1} />
                  <Card1 source={src2} link={link1} />  
              </div>
              <div>
                  <Card1 source={src3} link={link3} />
                  <Card1 source={src4} link={link4} />
              </div>
          </div>
      </div>
    </>
  )
}

export function Card1({source , link}) {
  const history = useNavigate();
  return (
    <div className='card' id='c3'>
      <img src={source} alt='logo' id='hom-logo'/>
      <button type="button" id='hom-btn' onClick={()=> history(`${link}`)}>Click Me</button>
    </div>
  )
} 



