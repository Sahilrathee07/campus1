import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ShowData() {
    const [arr , setArr] = useState([]);
    const history = useNavigate();

    function fetchData() {
        fetch("http://localhost:8000/getUserData", {
            method: "GET",
        }).then(res => res.json())
        .then(data => setArr(data.data));
    }


    useEffect(() => fetchData(),[]);
    return (
        <>
            <div className='show1'>
                <div className='show2'>
                    <h1>Latest Announcements</h1>
                </div>
                <div className='show3'>
                    <button onClick={()=> history('/anouncement')}>Cancel</button>
                </div>
            </div>
            <hr/>
            <div >
                { 
                    [...arr].reverse().map(a => {
                        return (
                            <div key={a.id}> <Show name={a.firstName} txt={a.description} /> </div>
                        )
                })}
            </div>
        </>
    )
}

function Show({name,txt}) {
    return (
        <>
            <div className='show-box'>
                <h3>By {name}</h3>
                <p>{txt}</p>
                <br/>
            </div>
        </>
    )
}