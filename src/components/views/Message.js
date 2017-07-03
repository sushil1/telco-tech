import React, {Component} from 'react'
import classnames from 'classnames'

class Message extends Component{
  render(){
    const {id, type, text} = this.props.message
    return(
      <div className={classnames('alert', {'alert-success' : type === 'success',
      'alert-danger' : type === 'error'
      })}>
        {text}
        <a><span>&times;</span></a>

        </div>
    )
  }
}

export default Message
