import React from 'react'
import Navbar1 from './Navbar1';
import './anouncement.css';
import { useNavigate } from 'react-router-dom';

export default function Anouncement() {
    const history = useNavigate();

    return (
    <>
        <Navbar1 />

        <div className='part4'>
            <h1>Welcome to the Announcement Page of CampusHub</h1> 
            <hr />
            <h3>Here, you can stay informed about the latest news, events, and announcements 
                happening on campus. Browse announcements by category, including Academic, Events, 
                Campus News, Clubs & Organizations, and more, and filter them based on 
                your interests and preferences.Check out the latest announcements below 
                to stay up-to-date with important campus updates and events. Discover 
                upcoming events, workshops, seminars, and lectures happening on campus, 
                and plan your schedule to never miss an important event again.</h3>
        </div>

        <div className='anu-box'>
            <div className='anu-box1'>
                <button onClick={()=> history('/announcementPost')}>Post</button>
                <button onClick={()=> history('/showData')}>Show</button>
            </div>
        </div>
    </>
  )
}



