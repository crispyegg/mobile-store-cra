import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from '../SendEnquiry'

const MobileDetails = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5000/mobiles/${id}`)
    .then((res)=> setDetails(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className=' container p-5'> 
         <div className='row'>
               <div className='col-lg-6'>
                <div className='card'>
                    <div className='card-body'>
                      <div className='row'>

                          <div className='col-6'>  
                              <img alt='mobile' src={details.path} className='w-100'/>
                          </div>

                          <div className='col-6'>
                              <h1>{details.name}</h1>
                              <p>{details.brand}</p>
                              <h6>{details.storage}</h6>
                              <h5>{details.color}</h5>
                              <button className='btn btn-primary'>get it only for {details.price}/-</button>
                          </div>

                      </div>
                       
                    </div>
                </div>
                  
                  <h1 className='collapse'>{details.description}</h1>
          </div>
          <div className='col-lg-6'>
              <h2 className=''>Enquiry now</h2>
               <SendEnquiry/>
          </div>

         </div>
    </div>
  )
}

export default MobileDetails 