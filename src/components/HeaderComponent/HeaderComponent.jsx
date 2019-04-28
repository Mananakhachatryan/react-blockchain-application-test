import React, { Component } from 'react';
import './HeaderComponent.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HeaderComponent extends Component {
  state = {
    menu: false,
  };

  menuBar = () => {
    this.setState({menu: !this.state.menu})
  }

  render() {
    return <div className="container-fluid">
        <div className="col-sm-12">
            <div className={ this.props.homepage ? "homepage-header header-content" : "header-content"}>
                <Link to={'/'} className='logo'></Link>
                <i className="fas fa-bars" onClick={ () => this.menuBar()}></i>
                <ul className={this.state.menu ? 'open animated fadeInDown' : 'animated fadeInUp'}>
                  <li><Link to={{ pathname: '/region/city?city=Seattle&country=us', state: 'flushDeal' }} >Seattle</Link></li>
                  <li><Link to={{ pathname: '/region/city?city=San Jose&country=us', state: 'flushDeal' }} >San Jose</Link></li>
                  <li className='last'><Link to={{ pathname: '/region/city?city=San Francisco&country=us', state: 'flushDeal' }} >San Francisco</Link></li>
                </ul>
            </div>
        </div>
      </div>;
  }
}

export default withRouter(HeaderComponent);
