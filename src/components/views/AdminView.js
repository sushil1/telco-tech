import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'

class AdminView extends Component{

  render(){
    return(
      <div>
        Welcome admin,
        <div>
          <div>Products</div>
          <div>Bookings</div>
          <div>Users</div>
        </div>
      </div>
    )
  }
}

export default AdminView
