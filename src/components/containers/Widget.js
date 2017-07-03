import React, {Component} from 'react'
import { ToggleBar, Comment } from '../views'
import firebase from 'firebase'
import {Base64} from 'js-base64'


class Widget extends Component{
  constructor(){
    super()
    this.state = {
      showComments: false,
      comments: [],
      firebase: null
    }
  }

  componentDidMount(){
    const fbApp = firebase.initializeApp({
      apiKey: "AIzaSyCGuiIBAGJkjBWGmmrBt2S89dD0dF6eP_w",
      authDomain: "telcotechchat.firebaseapp.com",
      databaseURL: "https://telcotechchat.firebaseio.com",
      projectId: "telcotechchat",
      storageBucket: "telcotechchat.appspot.com",
      messagingSenderId: "718913814590"
      })

    this.setState({
      firebase: fbApp
      })

    const path = Base64.encode(window.location.href)+'/comments'

    fbApp.database().ref(path).on('value', (snapshot)=>{
      const data = snapshot.val()
      if(data == null)
        return

      this.setState({
        comments: data.reverse()
      })
    })
}


  toggleComments(){
    this.setState({
      showComments: !this.state.showComments
    })
  }

  submitComment(event){
    if(event.keyCode != '13'){
      return
    }
    const comment = {
      text: event.target.value,
      timestamp: Date.now()
    }
    console.log(JSON.stringify(comment))
    let comments = Object.assign([], this.state.comments)
    const path = Base64.encode(window.location.href)+'/comments/'+comments.length

    this.state.firebase.database().ref(path).set(comment)
    event.target.value = '' //clear out the input

  }


  render(){
    if(this.state.showComments == true){
      return(
        <div style={style.comments}>
          <div>
            <input onKeyDown={this.submitComment.bind(this)} style={style.input} type="text" placeholder='Enter message'/>
          </div>
        {
          this.state.comments.map((comment, i)=>{
            return <Comment key={comment.timestamp} {...comment} />
          })
        }


          <ToggleBar label='Hide Comments' onToggle={this.toggleComments.bind(this)} />
        </div>
      )
    }
    return(
      <ToggleBar label='Show Comments' onToggle={this.toggleComments.bind(this)} />
    )
  }
}

const style={
  comments: {
    zIndex:100,
    height: 450,
    width: 320,
    position:'fixed',
    bottom:10,
    right:10,
    background:'#f1f9f5',
    border: '1px solid #ddd',
    padding:6,
    overflowY: 'scroll',
    paddingBottom: 40
  },
  input: {
    width: '100%',
    height: 32,
    border:'none',
    marginBottom:0,
    padding:9,
    borderBottom:'1px solid #ddd'
  }
}


export default Widget
