import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RegionalComponent from '../../components/RegionalComponent/RegionalComponent';
import { searchAll, searchByCity } from '../../store/actions/HomePageActions';
import { withRouter } from 'react-router-dom';

class RegionalContainer extends Component {
  state = {
    isFlushed: false
  };

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      this.getData();
    }
}

  getData() {
    let pathname = this.props.location.search === '' ? this.props.location.pathname.split('?')[1] : this.props.location.search.split('?')[1];
    let data = {
      offset: 0,
      limit:4
    }
    this.props.searchAll(data)
    if (pathname) {
      let city =  pathname.split('&')[0]
      let country = pathname.split('&')[1]
      let data = {
        offset: 0,
        limit:4,
        city: city.split('=')[1],
        country: country.split('=')[1]
      }
      this.props.searchByCity(data)
    }
  }

  render() {
    console.log(this.props.searchAllData)
    return (
      <Fragment>
          <RegionalComponent
            searchAll={this.props.searchAll}
            searchAllData={this.props.searchAllData}
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

export default withRouter(connect(mapStateFromProps, mapDispatchFromProps)(RegionalContainer));
