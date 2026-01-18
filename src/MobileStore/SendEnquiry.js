
import React, { Component } from 'react'

export default class SendEnquiry extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      mobile:'',
      email : ''
    }
  }
  changeData = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  submitHandler = (e) => {
     e.preventDefault()
     const { name, email , mobile} = this.state
     const nameError = document.getElementById('nameError')
     const mobileError = document.getElementById('mobileError')

     const alphaExp = /^[a-zA-Z\s]+$/ 
     const numExp = /^[0-9\s]+$/ 

     //name validation

     if (name === ''){
         nameError.textContent = `Name is mandatory`
     }
     else{
        if (name.match(alphaExp)){
          nameError.textContent =''
        }
        else {
          nameError.textContent = 'Name should be contains alphabetics only'
        }
     }
     //mobile validation
      if (mobile === ''){
        mobileError.textContent = `Mobile Number is Mandatory`
      }
      else{
        if(mobile.match(numExp)){
            if(mobile.length === 10){
              mobileError.textContent = ''
            }else{
              mobileError.textContent = '10 digits mobile number is required'
            }

        }
        else{
          mobileError.textContent = 'Mobile Number should contains numbers only'
        }
      }
  }

  render() {
    return (
      <div>
          <form onSubmit={this.submitHandler}>
          
                  <input type='text' name='name' value={this.state.name} onChange={this.changeData} className='form-control mb-3' placeholder='Enter Name' />
                   <p id='nameError'></p>
                  <input type='text' name='mobile' value={this.state.mobile} className='form-control mb-3' onChange={this.changeData}  placeholder='Mobile Number' />
                  <p id='mobileError'></p>
                  <input type='text' name='email' value={this.state.email} className='form-control mb-3' onChange={this.changeData}  placeholder='Email Address' />
                  <input type='submit' className='form-control mb-3'/>

          </form>
      </div>
    )
  }
}
