
import axios from 'axios'
import React, { useState } from 'react'

const AddMobile = () => {
   const [mobile,setMobile] = useState({name: '', brand: '', path: '', price: '', storage: '', color:'', is5G: '', description: ''})
   const changeData = (e) =>{
    // console.log(e.target.value);
    setMobile({...mobile , [e.target.name]:e.target.value})
   }
   const submitHandler = (e) =>{
       e.preventDefault()
       console.log(mobile);

       axios.post(`https://696d32f5f4a79b315180bef2.mockapi.io/mobiles`, mobile)
            .then(()=>{
              alert('new mobile added')
            })
            .catch((err)=>{
              console.log(err);
       })
   }
  return (
    <div className='container p-5'>
      <div className='col-lg-6 p-5 shadow mx-auto '>
        <h1 className='text-center'>AddMobile </h1>
        <form onSubmit={submitHandler}>
           <input type='text' name='name' onChange={changeData} placeholder='Mobile Name' className='form-control mb-3'/>
           <input type='text' name='brand'  onChange={changeData} placeholder='Mobile Brand' className='form-control mb-3'/>
           <input type='text' name='path'  onChange={changeData} placeholder='Mobile Image' className='form-control mb-3'/>
           <input type='number' name='price'  onChange={changeData} placeholder='Mobile Price' className='form-control mb-3'/>
           <input type='text' name='storage'  onChange={changeData} placeholder='Mobile Storage' className='form-control mb-3'/>
           <input type='text' name='color'  onChange={changeData} placeholder='Mobile color' className='form-control mb-3'/>
           <label>is5G ?</label>

          <div className="form-check">
              <input type="radio"  name='is5G'  onChange={changeData} value={true} className="form-check=input"/>
              <label className="form-check-label">
                True
              </label>
          </div>

          <div className="form-check">
              <input type="radio" name='is5G'  onChange={changeData} value={false}  className="form-check-input"/>
              <label className="form-check-label">
               False
              </label>
          </div>
          <textarea rows={5} cols={30} onChange={changeData} className='form-control my-3' name='description' placeholder='Mobile Description'></textarea>
          <input type='submit' className='form-control btn btn-primary'/>
          
        </form>
      </div>
    </div>
  )
}

export default AddMobile