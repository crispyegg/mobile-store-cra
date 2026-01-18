
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginStatus } from '../../App'

const AdminLogin = () => {
  const [details, setdetails] = useState({ email:'', password:'' })

  const [login, setlogin]= useContext(loginStatus)

  const navigate = useNavigate()
  const changedetails = (e) => {
    const{ name, value } = e.target

    setdetails({...details, [name]:value })
  }
  const submitHandler= (e) =>{
    e.preventDefault()
    const{ email, password }= details
    if (email==='admin@mm' && password === 'admin'){
      setlogin(true)
      alert('Login Sucessful')
      navigate('/dashboard')
    }
    else{
      alert('Invalid Credentials')
    }
  }
   
  return (
    <section className='container p-5'>
      <div className='col-lg-6 text-center shadow p-5 mx-auto'>
        <h2 className='mb-3'>Admin Login</h2>
        <form onSubmit={submitHandler}>
           <input type='email' name='email' onChange={changedetails} placeholder='Email Address' className='form-control mb-3'/>
           <input type='password' name='password'  onChange={changedetails} placeholder='Password' className='form-control mb-3'/>
           <input  type='submit' className='form-control mb-3'/>
        </form>
      </div>
    </section>
  )
}

export default AdminLogin