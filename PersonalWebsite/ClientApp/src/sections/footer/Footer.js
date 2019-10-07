import React from 'react';
import './Footer.scss';
import Logo from "../../img/logo2.png";

function Footer() {
  return (
    <footer className="footer align-items-center justify-content-center">
      <img src={Logo} alt="Logo"/>
      <div className="footer__socialMedia">
        <a href="https://www.linkedin.com/in/marcin-zem%C5%82o-860870136/"><i className="fa fa-linkedin"></i></a>      
        <a href="https://github.com/mzemlo"><i className="fa fa-github"></i></a>
      </div>
      <div>Copyright &copy; 2019 by Marcin Zemło</div>
    </footer>
  );
}

export default Footer;