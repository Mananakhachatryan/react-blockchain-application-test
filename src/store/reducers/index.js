import { combineReducers } from 'redux';
import homePageReducer from './HomePageReducer';
import eventDetailReducer from './EventDetailReducer';

export default combineReducers({
    homePageReducer,
    eventDetailReducer
});
