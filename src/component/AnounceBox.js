import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import './anounceBox.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AnounceBox() {
    const [name,setName] = useState('');
    const [anounce,setAnounce] = useState('');
    const history = useNavigate();

    async function submitPost() {
        try {
            await axios.post("http://localhost:8000/anouncement",{name,anounce})
            .then(res => {
                if(res.data === "saved") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Posted",
                        showConfirmButton: false,
                        timer: 1500
                      });
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
    <div className='box'>
        <h3>What you want to Post?</h3>
        <input type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
        />
        <textarea cols={30} rows={10}  
            placeholder='Enter Anouncement'
            value={anounce}
            onChange={(e)=> setAnounce(e.target.value)}
            required
        />
        <div className='submit'>
            <button onClick={submitPost}>Post</button>
            <button onClick={()=> history('/anouncement')}>Cancel</button>
        </div>
        
    </div>
  )
}

export default AnounceBox