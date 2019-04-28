
import Http from '../../shared/Http/Http';
import _ from 'lodash';

export const consts = {
    SEARCH_ALL_DATA_PENDING:    'SEARCH_ALL_DATA_PENDING',
    SEARCH_ALL_DATA_FULFILLED:  'SEARCH_ALL_DATA_FULFILLED',
    SEARCH_ALL_DATA_REJECTED:   'SEARCH_ALL_DATA_REJECTED',

    SEARCH_BY_CITY_PENDING:    'SEARCH_BY_CITY_PENDING',
    SEARCH_BY_CITY_FULFILLED:  'SEARCH_BY_CITY_FULFILLED',
    SEARCH_BY_CITY_REJECTED:   'SEARCH_BY_CITY_REJECTED',
}

export function searchAll(data){
    return async (dispatch, currentState) => {
      dispatch({ type: consts.SEARCH_ALL_DATA_PENDING });
      const url = `/events/upcoming?offset=${data.offset}&limit=${data.limit}`;
      Http.get(url, currentState, false, false)
        .then(response => {
          dispatch({ type: consts.SEARCH_ALL_DATA_FULFILLED, data: response.data });
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: consts.SEARCH_ALL_DATA_REJECTED, error });
        });
    };
}

export function searchByCity(data){
  return async (dispatch, currentState) => {
    dispatch({ type: consts.SEARCH_BY_CITY_PENDING });
    const url = `/events/upcoming/city?offset=${data.offset}&limit=${data.limit}&city=${data.city}&country=${data.country.toLowerCase()}`;
    //city?city=oslo&offset=1&limit=20
    Http.get(url, currentState, false, false)
      .then(response => {
        dispatch({ type: consts.SEARCH_BY_CITY_FULFILLED, data: response.data });
      })
      .catch((error) => {
          console.log(error);
          dispatch({ type: consts.SEARCH_BY_CITY_REJECTED, error });
      });
  };
}
