import {
  REQUEST_TOKENS_PENDING,
  REQUEST_TOKENS_SUCCESS,
  REQUEST_TOKENS_FAILED,
  REQUEST_ADD_FAV,
  REQUEST_REMOVE_FAV,
} from './actionTypes';




const initialStateTokens = {
  tokens: [],
  favourites: [],
  isPending: true,
};

export const requestTokens = (state = initialStateTokens, action = {}) => {
  switch (action.type) {
    case REQUEST_TOKENS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_TOKENS_SUCCESS:
      return {
        ...state,
        tokens: action.payload,
        isPending: false,
      };
    case REQUEST_TOKENS_FAILED:
      return { ...state, error: action.payload };
    case REQUEST_REMOVE_FAV:
      return { ...state, favourites: action.payload };
    case REQUEST_ADD_FAV:
      return { ...state, favourites: [...state.favourites, action.payload] };
    default:
      return state;
  }
};
