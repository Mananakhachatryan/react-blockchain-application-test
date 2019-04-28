import React, { Component } from 'react';
import './HomePageComponent.scss';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import HomePageContent from './HomePageContent/HomePageContent';
class HomePageComponent extends Component {
  state = {
    items: [],
    items2: []
  };

  render() {
    return <div className='homepage'>
        <div className='layer'>
          <HeaderComponent
            homepage='true'
          />
          <HomePageContent
            searchAll={this.props.searchAll}
            searchByCity={this.props.searchByCity}
            searchAllData={this.props.searchAllData}
          />
        </div>
      </div>;
        
        
        
      
  }
}

export default HomePageComponent;
