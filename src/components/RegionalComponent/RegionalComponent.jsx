import React, { Component } from 'react';
import './RegionalComponent.scss';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import RegionalComponentContent from './RegionalComponentContent/RegionalComponentContent';

class RegionalComponent extends Component {
  state = {
    items: [],
    items2: []
  };



  render() {
    
    return <div className='regional-component'>
        <HeaderComponent/>
        <RegionalComponentContent
          searchAll={this.props.searchAll}
          searchAllData={this.props.searchAllData}
        />
        <FooterComponent/>
      </div>;
  }
}

export default RegionalComponent;
