import React, {Component} from 'react'
import Moment from 'react-moment'

export default (props)=>{
  const comment = props
  return(
      <div style={{padding:12, borderBottom:'1px dotted #ddd'}}>
        <Moment format="D MMM, YYYY" date={comment.timestamp} style={style.timestamp}/><br />
        {comment.text}
      </div>
  )
}

const style = {
  timestamp: {
    color:'#777',
    fontSize:12,
    fontWeight:100
  }
}
