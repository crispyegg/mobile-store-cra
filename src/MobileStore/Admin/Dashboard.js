
import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { loginStatus } from '../../App'

const Dashboard = () => {
  const [login, setlogin] = useContext(loginStatus)
  const navigate = useNavigate()
  useEffect(()=>{
    if(login===false){
    navigate('/admin')
  }
  })
  return (
    <section className='container-fluid '>
      <div className='row'>
        <aside className='col-lg-3'>
          
            <Link to={''}>
              <h3>Admin Dashboard</h3>
            </Link>

            <Link to={'addmobile'}>
                 <button  className='btn btn-outline-primary'>Add Mobile</button>
            </Link>

            <Link to={'viewmobiles'}>
                 <button>View Mobiles</button>
            </Link>
            
            <Link to={'addlaptops'}>
                <button>Add Laptops</button>
            </Link>

            <Link to={'viewlaptops'}>
                 <button>view Laptops</button>
            </Link>

            <Link to={'viewenquiries'}>
                <button>view Enquiries</button>
            </Link>
            <button className='btn btn-dark' onClick={()=>setlogin(false)}>Logout</button>
        </aside>
        <div className='col-lg-9'>
           <Outlet/>
        </div>

      </div>
    </section>
  )
}

export default Dashboard


