import React, { Component} from 'react';
import './Navbar.scss';
import Logo from "../../img/logo.png";
import Scrollspy from 'react-scrollspy';

class Navbar2 extends Component {
  render(){
    return (
      <nav className="navigation">
        <a className="navbar-brand" href="#home"><img src={Logo} alt="MZ"/></a>
        <button className="navbar-toggler" >
          <span className="navbar-toggler-icon text-dark"></span>
        </button>

        <div className="" id="collapsibleNavbar">
          <Scrollspy
            items={ ['home', 'projekty', 'o-mnie', 'technologie', 'kontakt'] }
            currentClassName="nav__item--active"
            className="navigation__list"
            style={{
              fontWeight: 300
            }}
            offset={ 50 }
          >
            <li className="nav__item">
              <a className="nav-link" href="#projekty">Projekty</a>
            </li>
            <li className="nav__item">
              <a className="nav-link" href="#o-mnie">O mnie</a>
            </li> 
            <li className="nav__item">
              <a className="nav-link" href="#technologie">Technologie</a>
            </li> 
            <li className="nav__item">
              <a className="nav-link" href="#kontakt">Kontakt</a>
            </li> 
          </Scrollspy>
        </div> 
      </nav>
    );    
  };
}

export default Navbar2;