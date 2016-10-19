import * as types from './action-types';

const fetchMedalCountSuccess = (medalCount) => {
  return {
    type: types.FETCH_MEDAL_COUNT_SUCCESS,
    medalCount
  }
}

const fetchMedalCountFailure = (error) => {
  return {
    type: types.FETCH_MEDAL_COUNT_FAILURE,
    error
  }
}

export const fetchMedalCount = () => {
  return dispatch => {
    return fetch(`https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json`)
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        dispatch(fetchMedalCountSuccess(response))
      })
      .catch(function({message}) {
        dispatch(fetchMedalCountFailure(message))
      });
  };
}

export const sortMedalsByProp = (sortProp) => {
  return {
    type: types.SORT_MEDALS_BY_PROP,
    sortProp
  }
}