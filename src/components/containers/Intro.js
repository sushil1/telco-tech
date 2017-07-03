import React, {Component} from 'react'
import actions from '../../actions'
import {connect } from 'react-redux'
import Modal from './Modal'

class Intro extends Component{
  constructor(props){
    super()
    this.state = {
      modal: false
    }
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }



  render(){
    const selectedProduct = this.props.products.selected
    return(
      <div>
      {(this.state.modal)? (
        <Modal>
        <div>
          <h3>Welcome to Telco_Tech</h3>
          <br />
          <div className="row">
            <div className="6u 12u$(mobile)">
              <input  type="text" id="firstName" placeholder="First Name" />
              <input type="text" id="lastName"  placeholder="Last Name" />
              <input type="text" id="mobile"  placeholder="Mobile" />
              <input type="text" id="email"  placeholder="Email" />
              <input type="text" id="address"  placeholder="Address" />
              <input type="text" id="city"  placeholder="City" />
            <div>
              <label>Postcode</label>
              <br />
              <select id='postcode'>
                <option value="" disabled>Choose your Postcode</option>
                <option>2113</option>
                <option>2144</option>
              </select>
              <br />
            </div>
              <textarea id="description"  placeholder="Message"></textarea>
            </div>
            </div>
            <br />
          <button>Book</button><br />
          <button onClick={this.toggleModal.bind(this)}>Close</button>
        </div>
        </Modal>
      ) : null}
      <div className="container">
      {(selectedProduct == null)?
        <div>
          <header>
            <h2 className="alt">Hi! we are <strong>Telco Techicians</strong>, based on <strong>northern Sydney</strong></h2><br />
            <p>We are fast at fixing your <strong>internet</strong> and <strong>telephone</strong> issues.</p> <br />
            <p>Book us or call now to get your issues fixed within the next day.</p>
          </header>

          <footer>
            <button onClick={this.toggleModal.bind(this)}>Book</button>
          </footer>
        </div>
        :
        <div>
          <header>
            <h2 className='alt'>{selectedProduct.name}</h2><br />
            <p>{selectedProduct.description}</p>
            </header>
            <button>{'$ '}{selectedProduct.price}</button>
            <footer>
              <button onClick={this.toggleModal.bind(this)}>Book</button>
            </footer>
        </div>
      }

      </div>
      </div>
    )
  }
}


const stateToProps = (state)=>{
  return{
    products: state.product
  }
}

const dispatchToProps = (dispatch)=>{
  return{
  }
}

export default connect(stateToProps, dispatchToProps)(Intro)
