
import React from 'react'
import sale from './assets/sale.png'
import mission from './assets/mission.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
        <>
        
            <section className="py-5 bg-light" id="about">
                      <div className="container">
                          <div className="row align-items-center">
                          
                            <div className="col-lg-6 mb-4 mb-lg-0">
                              <h2 className="fw-bold mb-3">About <span className="text-primary">Ashif Tech Store</span></h2>
                                  <p className="text-muted">
                                    Welcome to <strong>Ashif Tech Store</strong>, your trusted destination for the latest smartphones, gadgets, and tech accessories.
                                    We believe technology should make life easier, faster, and more enjoyable — and we're here to bring you the very best of it.
                                  </p>
                                  <p className="text-muted">
                                    From flagship smartphones to everyday essentials, every product we offer is carefully selected for quality, performance, and value.
                                    Whether you're upgrading your device, hunting for the newest releases, or finding the perfect tech accessory, we've got you covered.
                                  </p>
                              <div className="row mt-4">
                                <div className="col-md-6 d-flex align-items-start mb-3">
                                  <i className="bi bi-phone-fill text-primary fs-3 me-3"></i>
                                  <div>
                                      <h6 className="fw-bold mb-1">Latest Products</h6>
                                      <p className="small text-muted mb-0">Always updated with the newest releases.</p>
                                  </div>
                                </div>
                                  <div className="col-md-6 d-flex align-items-start mb-3">
                                    <i className="bi bi-currency-rupee text-primary fs-3 me-3"></i>
                                  <div>
                                    <h6 className="fw-bold mb-1">Best Prices</h6>
                                    <p className="small text-muted mb-0">Affordable and competitive deals.</p>
                                  </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-start mb-3">
                                  <i className="bi bi-truck text-primary fs-3 me-3"></i>
                                  <div>
                                    <h6 className="fw-bold mb-1">Fast Delivery</h6>
                                    <p className="small text-muted mb-0">Quick and secure shipping services.</p>
                                  </div>
                                </div>
                                 <div className="col-md-6 d-flex align-items-start mb-3">
                                  <i className="bi bi-headset text-primary fs-3 me-3"></i>
                                  <div>
                                    <h6 className="fw-bold mb-1">Customer Support</h6>
                                    <p className="small text-muted mb-0">Friendly and reliable assistance.</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 text-center">
                              <img src={sale} alt="Ashif Tech Store" className="img-fluid rounded shadow"/>
                            </div>
                          </div>
                      </div>
            </section>

            {/*section part 2 */}

                          
              <section className="py-5 bg-white">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 text-center mb-4 mb-lg-0">
                      <img src={mission} alt="Our Mission" className="img-fluid rounded shadow"/>
                    </div>
                    <div className="col-lg-6">
                      <h2 className="fw-bold mb-3">Our <span className="text-primary">Mission</span></h2>
                      <p className="text-muted">
                        At <strong>Ashif Tech Store</strong>, our mission is simple — to make the latest technology accessible to everyone.
                        We strive to provide our customers with top-quality products, unmatched service, and honest prices.
                      </p>
                      <ul className="list-unstyled mt-3">
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Deliver premium tech products</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Ensure customer satisfaction</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Provide expert advice</li>
                      </ul>
                      <Link to='/contact' className='btn btn-primary mt-3'>Contact Us</Link>
                    </div>
                  </div>
                </div>
              </section>


            {/*section part 3 */}

                        
                        
              <section className="py-5 bg-light">
                <div className="container text-center">
                  <h2 className="fw-bold mb-4">Why <span className="text-primary">Shop With Us?</span></h2>
                  <p className="text-muted mb-5">
                    When you choose Ashif Tech Store, you choose a brand that values quality, transparency, and your satisfaction above all.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-4 d-flex">
                      <div className="p-4 bg-white shadow rounded h-100 w-100">
                        <i className="bi bi-award-fill fs-1 text-primary mb-3"></i>
                        <h5 className="fw-bold">Trusted Quality</h5>
                        <p className="small text-muted">All our products are 100% genuine and sourced from trusted suppliers.</p>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="p-4 bg-white shadow rounded h-100 w-100">
                        <i className="bi bi-lightning-charge-fill fs-1 text-primary mb-3"></i>
                        <h5 className="fw-bold">Fast Service</h5>
                        <p className="small text-muted">We ensure quick processing and delivery of every order.</p>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="p-4 bg-white shadow rounded h-100 w-100">
                        <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                        <h5 className="fw-bold">Customer First</h5>
                        <p className="small text-muted">Your satisfaction is our priority, every single time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


                        

        
        </>
  )
}

export default About