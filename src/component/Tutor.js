import React, { useEffect, useState } from 'react'
import './Tutor.css'
import Navbar1 from './Navbar1';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Tutor() {
    const [val , setVal] = useState(false);
    useEffect(()=>{},[]);
  return (
    <div className='tutor'>
        <Navbar1 />
        <button id='tech-btn' onClick={()=> {val ? setVal(false) : setVal(true)}}>Register</button>
        <hr />
        { val && <Form /> }
        <hr />
        <TechShow />
    </div>

  )
}

function Form() {
    const [name , setName] = useState('');
    const [phone , setPhone] = useState('');
    const [skill , setSkills] = useState('');
    const [desc , setDesc] = useState('');
    
    async function handleSubmit() {
      console.log(skill , desc);
      try {
        await axios.post("http://localhost:8000/tutor",{name,phone,skill,desc})
        .then(res => {
            if(res.data === "saved") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                <TechShow />
            }
            else {
                alert("error");
            }
        })
    } catch(e) {
        console.log(e)
    }
    }
    return (
        <div className='tech-form'>
            <h2 style={{color: 'black'}}>Registeration for teaching</h2>
            <input type='text'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <input type='text'
                placeholder='Enter phone number'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
            />
            <input type='text'
                placeholder='Enter your skills'
                value={skill}
                onChange={e => setSkills(e.target.value)}
                required
            />
            <textarea cols={30} rows={10}
                placeholder='Enter name'
                value={desc}
                onChange={e => setDesc(e.target.value)}
                required
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

function TechShow() {
  const [arr , setArr] = useState([]);

  function fetchData() {
    fetch("http://localhost:8000/tutor", { 
      method: "GET",
    }).then(res => res.json())
    .then(dat => setArr(dat.data));
  }

  useEffect(()=> fetchData(),[])
    return (
        <>
          {
            arr.map(item => {
              return (
                <div key={item.id} id='tech-lis'> <Show name={item.name} skill={item.skill} desc={item.description}/></div>
              )})
          }
        </>
    )
}


function Show({name , skill ,desc}) {
  return (
      <div className='tech-box'>
          <div className='tech-box1'><img src='user.png' alt="logo" /></div>
          <div className='tech-box2'><h2>{name}</h2></div>
          <div className='tech-box3'>
              <h2 style={{color: "black"}}>Skills: {skill}</h2>
              <p>{desc}</p>
          </div>
      </div>
  )
}   