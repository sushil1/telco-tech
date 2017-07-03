import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import store from '../../stores'
import {Provider} from 'react-redux'

class Modal extends Component{

  componentDidMount(){
    this.modalTarget = document.createElement('div')
    document.body.appendChild(this.modalTarget)
    this._render()
  }

  componentWillUpdate(){
    this._render()
  }

  componentWillUnmount(){
    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
  }

  _render(){
    ReactDOM.render(
      <Provider store={store.initialise()} >
      <div style={style.modal}>{this.props.children}</div>
      </Provider>,
    this.modalTarget
    )
  }

  render(){
    return <noscript />
  }
}


const style = {
  modal: {
    position: 'fixed',
    top:'60px',
    left:'100px',
    bottom:'60px',
    right:'80px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    display: 'block'
  }
}


export default Modal
