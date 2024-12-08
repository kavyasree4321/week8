import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link }    from 'react'
import Home from './Components/Home/Home.jsx'
import About from './Components/About us/About.jsx'
import Contact from './Components/Contact/Contact.jsx'


const App = () => {
  return (
    <Router>6
      +0
      <nav>
        <ul>
          <li><Link to='/Home'>HOME</Link></li>
          <li><Link to='/about'>ABOUT US</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </nav>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    
  )
}

export default App