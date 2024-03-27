import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginPage.css';
import Swal from 'sweetalert2';


function LoginPage(){
  const history = useNavigate();
  const [email , setEmail] = useState('');
  const [pass , setPass] = useState('');

  async function handleFormSubmit(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:8000/",{email,pass})
        .then(res => {
          console.log(res);
          if(res.data.message === "user exist") {
            const id = res.data.id;
            sessionStorage.setItem("id",id)
            history("/home",{state:{id}})
          }
          else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Data not found",
              footer: 'SignUp first'
            });
          }
        }).catch(e =>{
          alert("wrong details")
          console.log(e);
        }) 
      } catch(e) {
        console.log(e);
    }
  };

  const handleClick = () => {
    history('/sign-up');
  };

  return (
    <>
        <div className="container1">
            <div className="logo">
                <img src='./chlogo.svg' alt='logo' />
            </div>
            <div class="login-container">
                <div class="login-header">
                    <h2>Login</h2>
                </div>
                <div class="login-body">
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" 
                          id="email" 
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)} 
                        />
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" 
                          id="password" 
                          placeholder="Enter your password" 
                          value={pass}
                          onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div class="button-group">
                        <button class="login" onClick={handleFormSubmit}>Login</button>
                        <button class="signup" onClick={handleClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default LoginPage;