import { consts } from '../actions/EventDetailAction';

const initialState = {
    getItemData: {},
    getItemFetching: false,
    getItemFetched: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case consts.GET_ITEM_PENDING : {
            state = Object.assign({}, state, {getItemFetching: true, getItemFetched: false});
            break;
        }
        case consts.GET_ITEM_FULFILLED: {
            state = Object.assign({}, state, { getItemFetching: false, getItemFetched: true, getItemData: action.data});
            break;
        }
        case consts.GET_ITEM_REJECTED: {
            state = Object.assign({}, state, { getItemFetching: false, getItemFetched: false, getItemData:{}, getItemError: action.error });
            break;
        }
    }
    return state;
}

