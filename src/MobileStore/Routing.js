

import React from 'react'
import { Route ,Routes} from 'react-router-dom'

import Hero from './Hero'
import About from './About'
import Mobiles from './Mobiles'
import MobileDetails from './Admin/MobileDetails'
import Contact from './Contact'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import Welcome from './Admin/Welcome'
import AddMobile from './Admin/AddMobile'
import ViewMobile from './Admin/ViewMobiles'
import AddLaptop from './Admin/AddLaptop'
import Viewlaptops from './Admin/Viewlaptops'
import ViewEnquiries from './Admin/ViewEnquiries'
import NoPage from './NoPage'
import Laptop from './Laptop'



const Routing = () => {
  return (
   <Routes>
      <Route path='/' Component={Hero}/>
      <Route path='/about' Component={About}/>
      <Route path='/mobiles' Component={Mobiles}/>
      <Route path='/mobileDetails/:id' Component={MobileDetails}/>
      <Route path='/contact' Component={Contact}/>

      <Route path='/laptop' Component={Laptop}/>
      
      <Route path='/admin' Component={AdminLogin}/>
      <Route path='/dashboard' Component={Dashboard}>
        <Route path='' Component={Welcome}/>
        <Route path='addmobile' Component={AddMobile}/>
        <Route path='viewmobiles' Component={ViewMobile}/>
        <Route path='addlaptops' Component={AddLaptop}/>
        <Route path='viewlaptops' Component={Viewlaptops}/>
        <Route path='viewenquiries' Component={ViewEnquiries}/>
      </Route>
      <Route path='*' Component={NoPage} /> {/* for wrong url */}

   </Routes>
  )
}

export default Routing