import React, {Component} from 'react'
import actions from '../../actions'
import {connect } from 'react-redux'
import {AdminView} from '../views'
import {APIClient} from '../../utils'

class Account extends Component{
  constructor(){
    super()
    this.state = {
      registration: {
        email:'',
        password:''
      },
      errors: {},
      isLoading: false
    }
  }

  componentDidMount(){
    console.log('componentDidMount: '+this.props.account.currentUser)
    this.props.checkCurrentUser()
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  updateUser(event){
    let updated = Object.assign({}, this.state.registration)
    updated[event.target.id] = event.target.value
    this.setState({
      registration:updated
    })

  }

  validateUser(event){
    event.preventDefault()
    this.setState({errors: {}, isLoading:true})

    APIClient.post('/account/valid', this.state.registration).then(res=>this.setState({errors: res, isLoading:false}))
      .catch(err=>console.log('err: '+err))
  }

  login(event){
    event.preventDefault()
    if(this.state.registration.email.length == 0){
      alert('please fill in email')
      return
    }
    if(this.state.registration.password.length == 0){
      alert('please fill in password')
      return
    }
    this.props.loginUser(this.state.registration)
  }


  signup(event){
    event.preventDefault()
    if(this.state.registration.email.length == 0){
      alert('please fill in email')
      return
    }
    if(this.state.registration.password.length == 0){
      alert('please fill in password')
      return
    }
    this.props.signupUser(this.state.registration)

    this.props.addFlashMessage({
      type:'success',
      text:'you signed up. Welcome!'
    })
  }

  logout(){
    this.props.logoutUser()
  }


  render(){
    const currentuser = this.props.account.currentUser
    const errors = this.state.errors
    return(
      <div>

      {(currentuser == null)?
        (<div>
          <input onChange={this.updateUser.bind(this)} style={{backgroundColor:'black'}} type='text' id='email' placeholder='Email'/>
          <br />
          {errors.email && <span style={{color:'red'}}>{errors.email}</span>}< br/>
          <input onChange={this.updateUser.bind(this)} style={{backgroundColor:'black'}} type='password' id='password' placeholder='Password'/>
          < br/>
          {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
          < br/>
          <button onClick={this.login.bind(this)} style={{backgroundColor:'grey'}}>Log In</button>{' '}
          <button onClick={this.signup.bind(this)} style={{backgroundColor:'grey'}}>Sign Up</button>{' '}

          <button disabled={this.state.isLoading} onClick={this.validateUser.bind(this)} style={{backgroundColor:'grey'}}>Validate User</button>


          </div>


        )
        :
        <div>
        {((currentuser.roles.length == 0) || (currentuser.roles.indexOf('admin') == -1))?
          (<div>
              <h4>Welcome, {' '}{currentuser.email}</h4>
              <button style={{backgroundColor:'grey'}} onClick={this.logout.bind(this)}>
              Logout</button>
            </div>)
         :
         (<div>
             <h4>Welcome, {' '}{currentuser.email}</h4>
             <button style={{backgroundColor:'grey'}} onClick={this.logout.bind(this)}>
             Logout</button>
             <AdminView currentuser={currentuser}/>
           </div>)
         }
        </div>
      }
      </div>
    )
  }
}


const stateToProps = (state)=>{
  return{
    account: state.account
  }
}

const dispatchToProps = (dispatch)=>{
  return{
    loginUser: (user)=> dispatch(actions.loginUser(user)),
    signupUser: (user)=> dispatch(actions.signupUser(user)),
    checkCurrentUser: ()=> dispatch(actions.checkCurrentUser()),
    logoutUser: () => dispatch(actions.logoutUser()),
    addFlashMessage: (message)=> dispatch(actions.addFlashMessage(message))
  }
}


export default connect(stateToProps, dispatchToProps)(Account)
