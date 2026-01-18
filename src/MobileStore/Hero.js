
import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='container-fluid p-0'>
          <div id="mainSlider" className="carousel slide">
                  <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className='banner1 text-white'>
                            <h1>Welcome to Ashif <span className='text-danger'>Tech Store</span></h1>
                            <p>Your one-stop shop for the latest smartphones at unbeatable prices.</p>
                            <Link to={'/mobiles'} >
                            <button className='btn btn-outline-danger'>Shop Now</button>
                            </Link>
                           </div>
                        </div>

                        <div className="carousel-item">
                           <div className='banner2'>
                             <h1>iPhone 16 Pro Max Just Arrived</h1>
                              <p>Experience next-level performance and pro-grade camera.</p>
                                  <Link to={'/mobiles'}>
                                   <button  className='btn btn-outline-dark'>Order Today</button>
                                 </Link>
                           </div>
                        </div>

                        <div className="carousel-item">
                           <div className='banner3' >\
                               <h1 className='text-danger'>Mega Mobile Sale Up to 30% Off</h1>
                               <p className='text-danger'>Limited-time discounts on flagship</p>
                                 <Link to={'/mobiles'}>
                                    <button className='btn btn-outline-dark'>Explore</button>
                                 </Link>
                           </div>
                        </div>

                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#mainSlider" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>

                  <button className="carousel-control-next" type="button" data-bs-target="#mainSlider" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
           </div>
     </section>
  )
}

export default Hero