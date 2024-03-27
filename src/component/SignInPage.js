import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './SignInPage.css'
import Swal from 'sweetalert2';

function LoginPage(){
  const history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [gender,setGender] = useState('');
  const [age,setAge] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  
  const [formErrors, setFormErrors] = useState(true);

  async function handleFormSubmit(e){
    e.preventDefault();

    if (password !== confirmPassword) {
      setFormErrors(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password not matching",
      });
      return;
    }
    try{
        await axios.post("http://localhost:8000/signup",{
            firstName,lastName,email,phone,gender,age,password,confirmPassword
        }).then(res=>{
          if(res.data === "exist") {
            Swal.fire("User already exist");
          }
          else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your details has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            history("/",{state:{id:email}})
          }
        })
    } catch(e) {
        console.log(e);
    }
  };
  
  return (
    <div className='sign-div' id='main'>
      <div className='sign-div' id='one'>
        <h2>Create Account</h2>
        <form onSubmit={handleFormSubmit}>

            <input
              type="text"
              name="firstName" placeholder='Enter your first name'
              value={firstName}
              onChange={(e)=> setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              name="lastName" placeholder='Enter your last name'
              value={lastName}
              onChange={(e)=> setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email" placeholder='Enter your email Id'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              name="phone" placeholder='Enter your phone number'
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
              required
            />
            <input
              name="gender" placeholder='Enter your gender'
              value={gender}
              onChange={(e)=> setGender(e.target.value)}
            />
            <input
              type="number"
              name="age" placeholder='Enter your age'
              value={age}
              onChange={(e)=> setAge(e.target.value)}
              required
            />
            <input
              type="password"
              name="password" placeholder='Enter your password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
            <span className="error">{formErrors.passwordError}</span>
            <input
              type="password"
              name="confirmPassword" placeholder='Confirm your password'
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
              required
            />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='sign-div'>
          <img src='reg.jpg' alt='logo' />
      </div>
    </div>
  );
};

export default LoginPage;
