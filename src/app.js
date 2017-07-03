import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import {Home } from './components/layout'
import {Provider} from 'react-redux'
import store from './stores'


class App extends Component{

  render(){
    return(
      <Provider store={store.initialise()}>
        <Home />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
