import React, { Component } from 'react';
import './EventDitailPageComponent.scss';
import  HeaderComponent  from '../HeaderComponent/HeaderComponent';
import  FooterComponent from '../FooterComponent/FooterComponent';
import moment from 'moment';

class EventDitailPageComponent extends Component {
  state = {
  };

  render() {
    return <div className='details-component'>
      <HeaderComponent/>
      <div className='details-component-content'>
        <div className='container'>
            <a onClick={() => this.props.history.goBack()} className="back-btn"></a>
            <div className="region-banner"></div>
            <div className="text-content">
              <div className='row'>
                <h1>{this.props.eventDetailData.name}</h1>
                <p className='time'>{moment(this.props.eventDetailData.time).format('MMMM DD, YYYY - h:mm a')}</p>
                <div className='location'>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Bitcoin Center, {this.props.eventDetailData.city} , {this.props.eventDetailData.country} </p>
                </div>
                <p className>Welcome to the meetup for blockchain couples! This event is hosteed by {this.props.eventDetailData.groups[0].name}</p>
                <p dangerouslySetInnerHTML={{ __html: this.props.eventDetailData.description }}/> 
                <a href={this.props.eventDetailData.url} target="_blank" className='btn btn-info attend'>Attend</a>
              </div>
            </div>
            {this.props.eventDetailData.groups && this.props.eventDetailData.groups[0] &&
              <div className="organizer-text-content text-content">
                <div className='row'>
                  <div className='col-sm-12'>
                    <h2>About Organizer</h2>
                    <div className="organizer-img" style={{backgroundImage: `url(${this.props.eventDetailData.groups[0].photoUrl})`}}/>
                    <p className="organizer-name">{this.props.eventDetailData.groups[0].name}</p>
                    <a href={`https://www.meetup.com/${this.props.eventDetailData.groups[0].url}`} target="_blank" className='btn btn-info'>Join Group</a>
                  </div>
                </div>
              </div>
            }
              
        </div>
      </div>
      <FooterComponent/>
    </div>;
  }
}

export default EventDitailPageComponent;
