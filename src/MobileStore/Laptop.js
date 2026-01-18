
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Laptops = () => {
  
  const [data,setData] = useState([])
  const [brand,setbrand ]= useState("")
  useEffect(()=>{
    axios.get(`https://696d32f5f4a79b315180bef2.mockapi.io/laptops`)
    .then((res)=>{
              if(brand === ''){
                setData(res.data)
              }else{
                    const sample = res.data.filter((laptop)=>{
                    return laptop.brand === brand
                  })
                setData(sample)
                  }
              })
     
    .catch((err)=>{
       console.log(err);
       
    })
  })


  return (

    <div className='px-5'>             
          <section class="container-fluid my-5">
              <div className=''>
               <h2 class="text-center fw-bold mb-4 ">Our <span className='text-success'>Laptops</span></h2>
               <p className="text-muted text-center">Explore the latest Laptops at unbeatable prices.</p>
              </div>
              
                <div className="row mb-4">
                
                  <div className="col-md-6 mb-2">
                    <select  className="form-select" onChange={(e)=> setbrand(e.target.value)}>
                      <option value=''>All Brand</option>
                      <option value="Apple">Apple</option>
                      <option value="HP">HP</option> 
                      <option value="Lenovo">Lenovo</option>
                      <option value="Asus">Asus</option>
                      <option value="Acer">Acer</option>
                      <option value="MSI">MSI</option>
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


              <div class="row g-4">
                
            
               {
                data.map((laptop)=>{
                  return(
                    <div class="col-md-4 ">
                       <div class="card shadow-sm h-100 ">
                       <img src={laptop.image} class="card-img-top w-50 mx-auto" alt={laptop.name}></img>
                       <div class="card-body text-center">
                        <h5 class="card-title">{laptop.name}</h5>
                       <p class="card-text text-muted">{laptop.processor} • {laptop.ram} • {laptop.storage}</p>
                        <h6 class="text-success mb-3">{laptop.price}</h6>
                        <a href="/" class="btn btn-primary btn-sm">View Details</a>
                    </div>
                  </div>
                </div>

                  )
                })
               }

                
               
               
            </div>
          </section>

    </div>
  )
}

export default Laptops