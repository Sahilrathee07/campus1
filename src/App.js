import Home from './component/Home'
import LoginPage from './component/LoginPage'
import SignInPage from './component/SignInPage'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import React from 'react'
import Feedback from './component/Feedback'
import Anouncement from './component/Anouncement'
import Tutor from './component/Tutor'
import User from './component/User'
import LobbyScreen from "./screens/Lobby";
import RoomPage from './screens/Room';
import AnounceBox from './component/AnounceBox'
import ShowData from './component/ShowData'

function App() {
  return (
    <div className='App'>
       
      <Router>
        {/* {sessionStorage.getItem("user")!=null  ? <Navbar1/> : null} */}
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/sign-up' element={<SignInPage/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/feedback' element={<Feedback />}/>
          <Route path='/anouncement' element={<Anouncement />}/>
          <Route path='/tutor' element={<Tutor />}/>
          <Route path='/user' element={<User />}/>
          <Route path='/lobby' element={<LobbyScreen/>} />
          <Route path = "/room/:roomId" element={<RoomPage/>} />
          <Route path = "/announcementPost" element={<AnounceBox/>} />
          <Route path = "/showData" element={<ShowData/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App