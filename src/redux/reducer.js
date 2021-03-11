import {

  REQUEST_TOKENS_PENDING,
  REQUEST_TOKENS_SUCCESS,
  REQUEST_TOKENS_FAILED,
} from './actionTypes';




const initialStateTokens = {
  tokens: [],
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
    default:
      return state;
  }
};
