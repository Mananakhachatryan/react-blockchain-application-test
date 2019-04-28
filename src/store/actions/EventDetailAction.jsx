
import Http from '../../shared/Http/Http';
import _ from 'lodash';

export const consts = {
    GET_ITEM_PENDING:    'GET_ITEM_PENDING',
    GET_ITEM_FULFILLED:  'GET_ITEM_FULFILLED',
    GET_ITEM_REJECTED:   'GET_ITEM_REJECTED',
}

export function getItem(data){
    return async (dispatch, currentState) => {
      dispatch({ type: consts.GET_ITEM_PENDING });
      const url = `/events/upcoming/event?id=${data}`;
      Http.get(url, currentState, false, false)
        .then(response => {
          dispatch({ type: consts.GET_ITEM_FULFILLED, data: response.data });
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: consts.GET_ITEM_REJECTED, error });
        });
    };
}
