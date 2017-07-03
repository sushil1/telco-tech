import React, {Component} from 'react'

class Sidebar extends Component{

  render(){
    return(
      <div>
        <div id="logo">
          <span className="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
          <h1 id="title">Telco Technician</h1>
        </div>


        <nav id="nav">
          <ul>
            <li><a href="#home" id="top-link" className="skel-layers-ignoreHref"><span className="icon fa-home">Home</span></a></li>
            <li><a href="#services" id="portfolio-link" className="skel-layers-ignoreHref"><span className="icon fa-th">Services</span></a></li>
            <li><a href="#about" id="about-link" className="skel-layers-ignoreHref"><span className="icon fa-user">About Us</span></a></li>
            <li><a href="#contact" id="contact-link" className="skel-layers-ignoreHref"><span className="icon fa-envelope">Contact Us</span></a></li>
          </ul>
        </nav>

        <div className="bottom">
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Sidebar
