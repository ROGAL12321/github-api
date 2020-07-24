import ActionTypes from 'types/ActionTypes';

const INITIAL_STATE = {
  results: []
};

const user = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_RESULTS: {
      return {
        ...state,
        results: action.results
      }
    }
    default: {
      return state;
    }
  }
};

export default user;
