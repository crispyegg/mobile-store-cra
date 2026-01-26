
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Mobiles = () => {
  const [data,setData] = useState([])
  const [brand, setbrand] = useState('')

  useEffect(()=>{
    axios.get(`http://localhost:5000/mobiles
`)
    .then((res)=>{
              if(brand === ''){
                setData(res.data)
              }else{
                    const sample = res.data.filter((mobile)=>{
                    return mobile.brand === brand
                  })
                setData(sample)
                  }
              })
     
    .catch((err)=>{
       console.log(err);
       
    })
  })

  return (
    <div>
                      
            <section className="py-5 bg-light" id="mobiles">
              <div className="container">
               
                <div className="text-center mb-4">
                  <h2 className="fw-bold">Our <span className="text-primary">Mobiles</span></h2>
                  <p className="text-muted">Explore the latest smartphones at unbeatable prices.</p>
                </div>

             
                <div className="row mb-4">
                
                  <div className="col-md-6 mb-2">
                    <select  className="form-select" onChange={(e)=> setbrand(e.target.value)}>
                      <option value=''>All Brand</option>
                      <option value="Apple">Apple</option>
                      <option value="Samsung">Samsung</option>
                      <option value="OnePlus">OnePlus</option>
                      <option value="Xiaomi">Xiaomi</option>
                      <option value="Realme">Realme</option>
                    </select>
                  </div>
                
                  <div className="col-md-6 mb-2">
                    <select className="form-select">
                      <option value>Sort By</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                      <option value="name-asc">Name: A to Z</option>
                      <option value="name-desc">Name: Z to A</option>
                    </select>
                  </div>
                </div>

              
                <div className="row g-4">
                  
                   {
                     data.map((mobile,index)=>{
                      return(
                         <div key={index} className="col-md-4 col-lg-3">
                            <div className="card product-card shadow-sm border-0 h-100">
                                  <div className='text-center'>
                                    <img src={mobile.path} class="card-img-top w-50 bg-light" alt="phoneImage"></img>

                                  </div>

                                  <div className="card-body text-center">
                                        <h6 className="card-title">{mobile.name}</h6>
                                        <h6 className="card-text">{mobile.storage},{mobile.color}</h6>
                                        <p className="text-primary">{mobile.price}-</p>
                                        <Link to={`/mobileDetails/${mobile.id}`} className="btn btn-outline-primary btn-sm">View Details</Link>
                                  </div>
                             </div>
                         </div>
                      )
                     })
                   }

                 
                      

                    
                 
                </div>
              </div>
            </section>



    </div>
  )
}

export default Mobiles