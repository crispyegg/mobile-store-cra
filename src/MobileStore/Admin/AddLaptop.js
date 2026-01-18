
import axios from 'axios'
import React, { useState } from 'react'

const AddLaptop = () => {
  const [laptop,setlaptop]=useState({name:'' , brand:'' ,processor:'' ,ram:'' , storage:'' ,price:'' ,image:'' , discription:'' })
  const changeData = (e) =>{
    setlaptop({...laptop, [e.target.name]: e.target.value})
  }
  const submitHandler = (e) =>{
    e.preventDefault()

    axios.post(`https://696d32f5f4a79b315180bef2.mockapi.io/laptops` ,laptop)
    .then(()=>{
      alert('new laptop added')
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div>
       <div className='container p-5'>
            <div className='col-lg-6 p-3 shadow mx-auto text-center'>
               <h1 className='text-center mb-4'>AddLaptop</h1>
               <form onSubmit={submitHandler}>
                  <input type='text' name='name' onChange={changeData} placeholder='Laptop Name' className='form-control mb-3'/>
                  <input type='text' name='brand' placeholder='Brand' onChange={changeData} className='form-control mb-3'/>
                  <input type='text' name='processor' placeholder='Processor' onChange={changeData} className='form-control mb-3'/>
                  <input type='text' name='ram' placeholder='Ram' onChange={changeData} className='form-control mb-3'/>
                  <input type='text' name='storage' placeholder='Storage' onChange={changeData}  className='form-control mb-3'/>
                  <input type='text' name='price' placeholder='Price' onChange={changeData}  className='form-control mb-3'/>
                  <input type='text' name='image' placeholder='Image' onChange={changeData} className='form-control mb-3'/>

                  <textarea rows={5} cols={30} className='form-control mb-3' placeholder='Laptop Description' name='discription'></textarea>

                  <input type='submit' className='form-control btn btn-success my-3'/>
               </form>
            </div>
       </div>

    </div>
  )
}

export default AddLaptop