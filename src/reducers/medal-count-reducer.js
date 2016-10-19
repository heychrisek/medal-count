import * as types from '../actions/action-types';
import * as R from 'ramda';
import {sortByProp} from '../helpers';

const initialState = {
  loaded: false,
  error: null,
  medalCount: [],
  sortProp: 'gold'
};

export default (state = initialState, action) => {
  let medalCount
  switch (action.type) {
    case types.FETCH_MEDAL_COUNT_SUCCESS:
      medalCount = sortByProp(state.sortProp, action.medalCount);
      return R.merge(state, {medalCount, loaded: true})
    case types.FETCH_MEDAL_COUNT_FAILURE:
      return R.merge(state, {medalCount: [], loaded: false, error: action.error})
    case types.SORT_MEDALS_BY_PROP:
      medalCount = sortByProp(action.sortProp, state.medalCount);
      return R.merge(state, {sortProp: action.sortProp, medalCount})
    default:
      return state;
  }
};
