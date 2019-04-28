import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent';
import { searchAll, searchByCity } from '../../store/actions/HomePageActions';
import { withRouter } from 'react-router-dom';

class HomePageContainer extends Component {
  render() {
    //const {} = this.props;
    return (
      <Fragment>
          <HomePageComponent
            searchAll={this.props.searchAll}
            searchAllData={this.props.searchAllData}
            searchByCity={this.props.searchByCity}
          />
      </Fragment>
    );
  }
}
const mapStateFromProps = state => ({
  searchAllData: state.homePageReducer,
});

const mapDispatchFromProps = dispatch => ({
  searchAll: (body) => (dispatch(searchAll(body))),
  searchByCity: (body) => (dispatch(searchByCity(body))),
});

export default withRouter(connect(mapStateFromProps, mapDispatchFromProps)(HomePageContainer));
