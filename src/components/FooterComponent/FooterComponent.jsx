import React, { Component } from 'react';
import './FooterComponent.scss';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {
  state = {
    
  };

  render() {
    return <div className="footer-content">
            <Link to={'/'} className='logo'></Link>
            <span>Contact: fake@email.com</span>
      </div>;
  }
}

export default FooterComponent;
