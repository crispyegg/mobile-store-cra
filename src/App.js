
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import './App.css';

import Header from './MobileStore/Header';
import Footer from './MobileStore/Footer';
import Routing from './MobileStore/Routing';
import AddMobile from './MobileStore/Admin/AddMobile';
import ViewMobile from './MobileStore/Admin/ViewMobiles';
import { createContext, useState } from 'react';
import Laptop from './MobileStore/Laptop';
import Mobiles from './MobileStore/Mobiles';


export const loginStatus = createContext()

function App() {
  const [login, setlogin] = useState(false)
  return (
    <div className="container-fluid p-0">

      
      <loginStatus.Provider value={[login, setlogin]}>
            <Header/>
            <Routing/>
            <Footer/> 
      </loginStatus.Provider>
     
    </div>
  );
}

export default App;