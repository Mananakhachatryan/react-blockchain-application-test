import React, { Component } from 'react';
import '../HomePageComponent.scss';
import { Link } from 'react-router-dom';
import {countries} from '../../../config/countries';
import _ from 'lodash';
import { Redirect, withRouter } from 'react-router-dom';

class HomePageContent extends Component {
  state = {
    searchData: '',
    offset: '',
    limit: '',
    city: '',
    country: '',
    redirectToAll: false
  };

  searchData = () => {
    let obj = this.state.searchData.split(',');
    let addressArray = [];
    for (let i of obj) {
      addressArray.push(i.trim().toLowerCase());
    }
    let getCountry = countries.find(r => addressArray.includes(r.name.toLowerCase()) );
    let countryName = getCountry ? getCountry.name : '';
    let city = this.city(this.state.searchData.split(', '), countryName);

    if(this.state.searchData === '') {
      this.setState({
        redirectToAll: true
      })
    }

    if(this.state.searchData !== '') {
        this.setState({
          offset: 1,
          limit:4,
          city: city,
          country: getCountry ? getCountry.code : null,
        })
    }

  }

  city(data, countryName) {
    let city = '';
    for (let i of data) {
        if ( i.toLowerCase() !== countryName.toLowerCase()) {
           city = i
        }
    }
    return city;
  }

  changeSearchData = (e) => {
    let value = e.target.value;
    this.setState({ searchData : value });
  }

  render() {
    if (this.state.redirectToAll) {
      return <Redirect to={{ pathname: `/region/all` }} />
    }

    if( this.state.city !== '' && this.state.country !== '' ){
      return <Redirect to={{ pathname: `/region/city?city=${this.state.city}&country=${this.state.country}` }} />
    }

    return <div className='homepage-content'>
        <div className="container">
            <div className="row">
                <div className='col-sm-12'>
                    <div className="logo-content"></div>
                    <p>Find blockchain meetups near you now.</p>
                    <div className="search-bar">
                        <input type='text' value={this.state.searchData} onChange={ (e) => this.changeSearchData(e)} className='pt-mono-font' />
                        <div className='logo-button' onClick={() => this.searchData()}></div>
                    </div>
                    <ul className='menu-list'>
                      <li><Link to={`/region/city=Seattle&country=us`} >Seattle</Link></li>
                      <li><Link to={'/region/city=San Jose&country=us'} >San Jose</Link></li>
                      <li className='last'><Link to={'/region/city=San Francisco&country=us'} >San Francisco</Link></li>
                  </ul>
                </div>
            </div>
        </div>
    </div>;
        
  }
}

export default HomePageContent;
