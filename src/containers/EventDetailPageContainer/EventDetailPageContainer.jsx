import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import EventDitailPageComponent from '../../components/EventDitailPageComponent/EventDitailPageComponent';
import { searchAll } from '../../store/actions/HomePageActions';
import { getItem } from '../../store/actions/EventDetailAction';
import { withRouter } from 'react-router-dom';

class EventDitailPageContainer extends Component {


  componentWillMount() {
    let id = this.props.location.pathname.split('/')[2];

    this.props.getItem(id);
  }

  render() {
    //const {} = this.props;
    console.log(this.props.eventDetailData.result)
    return (
      <Fragment>
        
          { this.props.eventDetailData.getItemData && this.props.eventDetailData.getItemData.result && this.props.eventDetailData.getItemData.result[0]  &&
            <EventDitailPageComponent
              getItem={this.props.getItem}
              eventDetailData={this.props.eventDetailData.getItemData.result[0]}
              history={this.props.history}
            />
          }
        
      </Fragment>
    );
  }
}
const mapStateFromProps = state => ({
  searchAllData: state.homePageReducer,
  eventDetailData : state.eventDetailReducer
});

const mapDispatchFromProps = dispatch => ({
  searchAll: (body) => (dispatch(searchAll(body))),
  getItem: (body) => (dispatch(getItem(body))),
});

export default withRouter(connect(mapStateFromProps, mapDispatchFromProps)(EventDitailPageContainer));
