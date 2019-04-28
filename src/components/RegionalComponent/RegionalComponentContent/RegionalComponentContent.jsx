import React, { Component } from 'react';
import '../RegionalComponent.scss';
import EventContent from './EventContent/EventContent';
import Pagination from './Pagination/Pagination';
import _ from 'lodash';

class RegionalComponentContent extends Component {
  state = {
    items: [],
    items2: [],
    offsetAll: 0,
    offsetSearch: 0,
    pageAll: 1,
    pageSearch: 1,
    limit: 4
  };

  changePagination = (page, type) => {
    let data = {};
    let state = Object.assign({}, this.state);
    if (page === 'prev' || page === 'next') {
      if (page === 'prev' && this.state['page' + type]  <= 1) return;
      let changedPage = page === 'prev' ? this.state['page' + type] - 1 : this.state['page' + type] + 1;
      data = {
        offset: this.state.limit * changedPage,
        limit: this.state.limit
      }
      state['page' + type] = changedPage;
      state['offset' + type] = this.state.limit * changedPage;
    } else {
      data = {
        offset: this.state.limit * page,
        limit: this.state.limit
      }
      state['page' + type] = page;
      state['offset' + type] = this.state.limit * page;
    }

    this.setState(state);
    type === 'All' ? this.props.searchAll(data) : this.props.searchByCity(data);
  }

  showPagination = (type) => {
    let status = true;
    if (this.state['offset' + type] === 0) {
      let size = type === 'Search' ? this.props.searchAllData.searchByCityData.result.length : this.props.searchAllData.searchAllData.result.length
      if (size < 4) status = false;
    }
    return status;
  }

  render() {
    console.log(this.props.searchAllData)
    return <div className='regional-component-content'>
      <div className='container'>
        <div className="region-banner"></div>
        <div className="event-list">
          <div className='row'>
            <div className='col-sm-12'>
            {  (this.props.searchAllData.searchByCityData.result && this.props.searchAllData.searchByCityData.result.length > 0 && !this.props.searchAllData.searchByCityData.error) &&

              <div>
                <h5 className='mini-title'>Discover these events near you:</h5>
                <EventContent
                  data={this.props.searchAllData.searchByCityData}
                />
                {  this.showPagination('Search') &&
                  <Pagination
                    type="Search"
                    active={this.state.pageSearch}
                    changePagination={this.changePagination}
                    searchAll={this.props.searchAll}
                    searchAllData={this.props.searchAllData}
                  />
                }
                  
              </div>
            }
              {  (this.props.searchAllData.searchAllData.result && this.props.searchAllData.searchAllData.result.length > 0 && !this.props.searchAllData.searchAllData.error) &&
                <div className=''>
                  <h5 className='mini-title'>All events:</h5>
                  <EventContent
                    data={this.props.searchAllData.searchAllData}
                  />
                  {this.showPagination('All') && <Pagination
                      type='All'
                      active={this.state.pageAll}
                      changePagination={this.changePagination}
                      searchAll={this.props.searchAll}
                      searchAllData={this.props.searchAllData}

                  />}
                </div>
                
              }
            </div>
          </div>
        </div>
      </div>
        
    </div>;
  }
}

export default RegionalComponentContent;
