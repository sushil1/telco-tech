import React, {Component} from 'react'

export default (props)=>{

  return(
    <div onClick={props.onToggle.bind(this)} style={style.container}>
      {props.label}
    </div>
  )
}


const style={
  container: {
    zIndex:100,
    color:'#fff',
    position:'fixed',
    bottom:10,
    right:10,
    width:320,
    background:'#000',
    padding:6,
    paddingLeft:14
  }
}
