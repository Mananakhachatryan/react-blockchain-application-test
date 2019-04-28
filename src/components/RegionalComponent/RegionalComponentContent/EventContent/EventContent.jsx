import React, { Component } from 'react';
import '../../RegionalComponent.scss';
import _ from 'lodash';
import { Redirect, withRouter } from 'react-router-dom';

class EventContent extends Component {
  state = {
    redirectPage: ''
  };

  eventDetails = (id) => {
    this.setState({ redirectPage : id })
  }

  render() {

    if(this.state.redirectPage !== '' ){
        return <Redirect to={{ pathname: `/event-details/${this.state.redirectPage}` }} />
    }

    let events = this.props.data.result.map(item=>{

        return (
            <div className='col-xl-3 col-md-6'>
                <div className='event-card' onClick={ () => this.eventDetails(item.id) }>
                    <div className="event-img" style={{backgroundImage: `url(${item.photoUrl})`}}></div>
                    <div className='text-box'>
                        <div className="attending-box">
                            <span>Attending</span>
                            <span className='round'>123+</span>
                        </div>
                        <h4>{item.name}</h4>
                        <p>Long subtitle should be truncate ...</p>
                        {/* <p className='description' dangerouslySetInnerHTML={{ __html: item.description }}/> */}
                        <p className="description">{item.description.replace(/(<([^>]+)>)/ig,"")}</p>
                        {(item.groups && item.groups[0]) && <span className='name-span'>{item.groups[0].name}</span>}
                    </div>
                </div>
            </div>
        )
    })

    return <div className='event-content'>
        <div className='row'>
            {events}
            {/* <div className='col-xl-3 col-md-6'>
                <div className='event-card'>
                    <div className="event-img"></div>
                    <div className='text-box'>
                        <div className="attending-box">
                            <span>Attending</span>
                            <span className='round'>123+</span>
                        </div>
                        <h4>Your Event Title</h4>
                        <p>Long subtitle should be truncate ...</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <span className='name-span'>Gladys Kanyinda</span>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6'>
                <div className='event-card'>
                    <div className="event-img"></div>
                    <div className='text-box'>
                        <div className="attending-box">
                            <span>Attending</span>
                            <span className='round'>123+</span>
                        </div>
                        <h4>Your Event Title</h4>
                        <p>Long subtitle should be truncate ...</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <span className='name-span'>Gladys Kanyinda</span>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6'>
                <div className='event-card'>
                    <div className="event-img"></div>
                    <div className='text-box'>
                        <div className="attending-box">
                            <span>Attending</span>
                            <span className='round'>123+</span>
                        </div>
                        <h4>Your Event Title</h4>
                        <p>Long subtitle should be truncate ...</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <span className='name-span'>Gladys Kanyinda</span>
                    </div>
                </div>
            </div> */}
        </div>
        
            
      </div>;
  }
}

export default EventContent;
