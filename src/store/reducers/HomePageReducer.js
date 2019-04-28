import { consts } from '../actions/HomePageActions';

const initialState = {
    searchAllData: {},
    searchAllFetching: false,
    searchAllFetched: false,

    searchByCityData: {},
    searchByCityFetching: false,
    searchByCityFetched: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case consts.SEARCH_ALL_DATA_PENDING : {
            state = Object.assign({}, state, {searchAllFetching: true, searchAllFetched: false});
            break;
        }
        case consts.SEARCH_ALL_DATA_FULFILLED: {
            state = Object.assign({}, state, { searchAllFetching: false, searchAllFetched: true, searchAllData: action.data});
            break;
        }
        case consts.SEARCH_ALL_DATA_REJECTED: {
            state = Object.assign({}, state, { searchAllFetching: false, searchAllFetched: false, searchAllData:{}, searchAllError: action.error });
            break;
        }

        case consts.SEARCH_BY_CITY_PENDING : {
            state = Object.assign({}, state, {searchByCityFetching: true, searchByCityFetched: false});
            break;
        }
        case consts.SEARCH_BY_CITY_FULFILLED: {
            state = Object.assign({}, state, {searchByCityFetching: false, searchByCityFetched: true, searchByCityData: action.data});
            break;
        }
        case consts.SEARCH_BY_CITY_REJECTED: {
            state = Object.assign({}, state, { searchByCityFetching: false, searchByCityFetched: false, searchByCityData:{}, searchByCityError: action.error });
            break;
        }
    }
    return state;
}

