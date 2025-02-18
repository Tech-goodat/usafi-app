// import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DynamicRouteProvider from './DynamicRouteProvider'
import Home from './Home'
import Contact from './Contact'
import SustainableProjects from './SustainableProjects'
import Careers from './Careers'
import Services from './Services'
import AboutUs from './AboutUs'
import TopNav from './TopNav'
import Notifications from './Notifications'
import Login from './Login'






const App = () => {
  return (
    <Router>
      <div className='bg-gradient-to-b from-green-50 to-gray-100 text-black flex flex-col  w-full min-h-screen'>
      <TopNav />
      <div className='flex w-full flex-1'>
      <Routes>
        <Route path='/' element={<DynamicRouteProvider element={<Home />} title='UsafiPlus | Home'/>}/>
        <Route path='/about us' element={<DynamicRouteProvider element={<AboutUs />} title='UsafiPlus | About us'/>}/>
        <Route path='/services' element={<DynamicRouteProvider element={<Services />} title='UsafiPlus | Services'/>}/>
        <Route path='/careers' element={<DynamicRouteProvider element={<Careers />} title='UsafiPlus | Careers'/>}/>
        <Route path='/sustainable projects' element={<DynamicRouteProvider element={<SustainableProjects />} title='UsafiPlus | sustainable projects'/>}/>
        <Route path='/contact' element={<DynamicRouteProvider element={<Contact />} title='UsafiPlus | contact'/>}/>
        <Route path='/notifications' element={<DynamicRouteProvider element={<Notifications />} title='UsafiPlus | notifications'/>}/>
        <Route path='/login' element={<DynamicRouteProvider element={<Login />} title='UsafiPlus | sign in'/>}/>
      </Routes>
      </div>
      </div>
      
    </Router>
  )
}

export default App
