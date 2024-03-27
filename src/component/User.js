import React, { useState, useEffect } from 'react';
import './user.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function User() {
    const history = useNavigate();
    const [user , setUser] = useState({ firstName: '' , lastName: '', email: '', phone: '', 
    gender: '', age:'', password:''})

    const [confirmPassword, setConfirmPassword] = useState('');
    const [formErrors, setFormErrors] = useState(true);

    const id = sessionStorage.getItem("id");

    async function handleFormSubmit(e){
        e.preventDefault();
    
        if (user.password !== confirmPassword) {
          setFormErrors(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password not matching",
          });
          return;
        }
        try{
            await axios.post("http://localhost:8000/user1",{id , user})
            .then(res => {
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
                history("/")
              }
            })
        } catch(e) {
            console.log(e);
        }
      };


    async function userData() {
        try{
            await axios.post("http://localhost:8000/user",{id})
            .then(res => {
                setUser(res.data.user);
            })
        } 
        catch(e) {
            console.log("frontEnd eror")
        }
    }

    const handleInputChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };

    useEffect(() => { userData() } ,[])
    
    

    return (
        <div className='sign-div' id='main'>
        <div className='sign-div' id='one'>
            <h2>Create Account</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="firstName" placeholder='Enter your first name'
                    value={user.firstName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="lastName" placeholder='Enter your last name'
                    value={user.lastName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email" placeholder='Enter your email Id'
                    value={user.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="tel"
                    name="phone" placeholder='Enter your phone number'
                    value={user.phone}
                    onChange={handleInputChange}
                    required
                />
                <input
                    name="gender" placeholder='Enter your gender'
                    value={user.gender}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="age" placeholder='Enter your age'
                    value={user.age}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password" placeholder='Enter your password'
                    value={user.password}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword" placeholder='Confirm your password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
}
