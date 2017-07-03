import React, {Component } from 'react'
import actions from '../../actions'
import {connect } from 'react-redux'
import {postcode} from '../../utils'
import _ from 'lodash'


class Booking extends Component{
  constructor(){
    super()
    this.state = {
      booking: {
        firstName:'',
        lastName:'',
        mobile:'',
        email:'',
        address:'',
        city:'',
        postcode:'',
        description:''
      }

    }
  }

  updateBooking(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.booking)
    updated[event.target.id] = event.target.value
    this.setState({
      booking: updated
    })
  }

  submitBooking(event){
    event.preventDefault()
    if(this.state.booking.firstName.length == 0){
      alert('please fill first name')
      return
    }
    if(this.state.booking.lastName.length == 0){
      alert('please fill last name')
      return
    }
    if(this.state.booking.mobile.length == 0){
      alert('please enter your mobile number')
      return
    }
    if(this.state.booking.address.length == 0){
      alert('please enter your address')
      return
    }
    if(this.state.booking.city.length == 0){
      alert('please fill the name of the city')
      return
    }
    this.props.newBookingCreated(this.state.booking)
  }


  render(){
    const selectedProduct = this.props.products.selected
    const options = _.map(postcode, (val, key)=>{
      return <option key={val} value={val}>{key}</option>
    })
    return(
        <div className="container">
            <h2>Contact</h2>
            <p>Book our technicians and they will contact you within an hour</p>

          <form method="post" action="#">
            <div className="row">
              <div className="6u 12u$(mobile)">
              <input onChange={this.updateBooking.bind(this)} type="text" id="firstName" placeholder="First Name" />
              <input type="text" id="lastName" onChange={this.updateBooking.bind(this)} placeholder="Last Name" />
              <input type="text" id="mobile" onChange={this.updateBooking.bind(this)} placeholder="Mobile" />
              <input type="text" id="email" onChange={this.updateBooking.bind(this)} placeholder="Email" />
              <input type="text" id="address" onChange={this.updateBooking.bind(this)} placeholder="Address" />
              <input type="text" id="city" onChange={this.updateBooking.bind(this)} placeholder="City" />
              <div>
                <label>Postcode</label>
                <select id='postcode' onChange={this.updateBooking.bind(this)}  value={this.state.postcode}>
                  <option value="" >Choose your Postcode</option>
                  {options}
                </select>
              </div>
              <textarea id="description" onChange={this.updateBooking.bind(this)} placeholder="Message"></textarea>
              </div>
              {(selectedProduct == null)? null :
                <div className="6u 12u$(mobile)">
                  <h4>You have selected: {" "}{selectedProduct.name}</h4>
                  <p>{selectedProduct.description}</p>
                  <span>{selectedProduct.price}</span>
                </div>
              }
              <br />
              <div className="12u$">
                <input type="submit" onClick={this.submitBooking.bind(this)} value="Book" />
              </div>
            </div>
          </form>
        </div>
    )
  }
}


const stateToProps = (state)=>{
  return{
    bookings: state.booking,
    products: state.product
  }
}

const dispatchToProps = (dispatch)=>{
  return{
    newBookingCreated: (booking)=> dispatch(actions.newBookingCreated(booking))
  }
}

export default connect(stateToProps, dispatchToProps)(Booking)
