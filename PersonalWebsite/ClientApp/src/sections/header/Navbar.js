import React, {Component} from 'react';
//import './Navbar.scss';
import Logo from "../../img/logo.png";
import Scrollspy from 'react-scrollspy'
import classNames from 'classnames';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
        isScrolled: false,
        isCollapsed: false
    };
  };
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll); 
  };

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = evt => {
    if (window.scrollY >= window.innerHeight - 100) {
      return this.setState({ isScrolled: true });    
    }else{
      return this.setState({ isScrolled: false });    
    }
  };

  handleClick = evt => {
    if (this.state.isCollapsed === false) {
      return this.setState({ isCollapsed: true });    
    }else{
      return this.setState({ isCollapsed: false });    
    }
  };
  render(){
    let navbarClass = classNames({
      'navbar': true,
      'navbar-expand-lg': true,
      'navbar-light': true,
      'fixed-top': true,
      'scrolled': this.state.isScrolled,
    });
    let collapseClass = classNames({
      'collapse': true,
      'navbar-collapse': true,
      'justify-content-end': true,
      'show': this.state.isCollapsed
    });   
    return (
      <nav className={navbarClass}>
        <a className="navbar-brand" href="#home"><img src={Logo} alt="MZ"/></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={this.handleClick}>
          <span className="navbar-toggler-icon text-dark"></span>
        </button>

        <div className={collapseClass} id="collapsibleNavbar">
          <Scrollspy
            items={ ['home', 'projekty', 'o-mnie', 'technologie', 'kontakt'] }
            currentClassName="nav__item--active"
            className="navbar-nav"
            style={{
              fontWeight: 300
            }}
            offset={ 0 }
          >
            <li className="nav__item">
              <a className="nav-link" href="#home" onClick={this.handleClick}>Home</a>
            </li>
            <li className="nav__item">
              <a className="nav-link" href="#projekty" onClick={this.handleClick}>Projekty</a>
            </li>
            <li className="nav__item">
              <a className="nav-link" href="#o-mnie" onClick={this.handleClick}>O mnie</a>
            </li> 
            <li className="nav__item">
              <a className="nav-link" href="#technologie" onClick={this.handleClick}>Technologie</a>
            </li> 
            <li className="nav__item">
              <a className="nav-link" href="#kontakt" onClick={this.handleClick}>Kontakt</a>
            </li> 
          </Scrollspy>
        </div> 
      </nav>
    );
  };
}

export default Navbar;
