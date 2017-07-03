import React, {Component} from 'react'
import {Message} from '../views'
import {connect} from 'react-redux'

class FlashMessages extends Component{

  render(){
    const messages = this.props.account.messages || []

    return(
      <div>
        {(messages.length > 0)? messages.map(message=>{
          return <Message key={message.id} message={message}/>
        }) : null}
      </div>
  )}

}





const stateToProps = (state)=>{
  return{
    account: state.account
  }
}

export default connect(stateToProps)(FlashMessages)
