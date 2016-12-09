import * as types from '../constants/ActionTypes';
require('child_process');

const initialState = {
  data: [],
  isFetching: false
};

export default function DeparturesAppReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_UPDATE:
        return Object.assign({}, state, { isFetching: true });

    case types.RECIEVE_UPDATE:
        return Object.assign({}, state, { data: action.data, isFetching: false });
    default:
      return state;
  }
}