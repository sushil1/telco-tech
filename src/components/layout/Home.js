import React, {Component} from 'react'
import {Booking, Intro, Products, Account, Widget, Modal, FlashMessages} from '../containers'
import {About, Footer,  Sidebar} from '../views'


class Home extends Component{

  render(){
    return(
      <div>
        <div id="header">
          <div className="top">
            <Sidebar />
          </div>
        </div>
        <div id="main">
            <section>
              <FlashMessages />
            </section>
            <section id="profile" style={{paddingTop:'0.3em', paddingBottom:'0.3em'}}>
              <Account />
            </section>
            <section id="home" >
              <Intro />
            </section>
            <section id="services" className="three">
              <Products />
            </section>
            <section id="about" className="four">
              <About />
            </section>
            <section id="contact" className="fi" style={{paddingTop:'0.3em'}}>
              <Booking />
            </section>
            <section>
              <Widget />
            </section>
        </div>
        <div id='footer'>
            <Footer />
        </div>
      </div>
    )
  }
}



export default Home
