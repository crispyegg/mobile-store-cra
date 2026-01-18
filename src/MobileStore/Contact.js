
import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contact = () => {
  return (
    <>
                
          <section className="py-5 bg-light" id="contact">
            <div className="container">
              
              <div className="text-center mb-4">
                <h2 className="fw-bold">Contact <span className="text-primary">Us</span></h2>
                <p className="text-muted">We'd love to hear from you! Get in touch using the form below.</p>
              </div>

              <div className="row g-4">
              
                <div className="col-lg-6">
                 <SendEnquiry/>
                </div>

                  
                    <div className="col-lg-6">                      
                      <div className="bg-white p-4 rounded shadow-sm mb-3">
                        <h5 className="fw-bold mb-3">Ashif Tech Store - Hyderabad</h5>
                        <p className="mb-1"><i className="bi bi-geo-alt-fill text-primary"></i>  2nd Floor, XYZ Plaza, Banjara Hills, Hyderabad, Telangana, India</p>
                        <p className="mb-1"><i className="bi bi-telephone-fill text-primary"></i> +91 98765 43210</p>
                        <p className="mb-1"><i className="bi bi-envelope-fill text-primary"></i> support@ashiftechstore.com</p>
                        <p className="mb-0"><i className="bi bi-clock-fill text-primary"></i> Mon - Sat: 10:00 AM - 9:00 PM</p>
                      </div>
                    </div>
               
              </div>
            </div>
          </section>

          <section className='py-5'>
            <div className='container'>
              <h4 className='mb-4 text-center'>Find Us Here</h4>
              <div className='ratio ratio-16x9'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.707941434218!2d78.34191127501103!3d17.42579818346798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938400f27871%3A0x6b5f110ee01d5298!2sWipro%202%20Tower-9%2C%20Madhava%20Reddy%20Colony%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1755109778633!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

            </div>

          </section>

    </>
  )
}

export default Contact