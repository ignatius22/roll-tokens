import apiCall from '../api/api';

import {
  
  REQUEST_TOKENS_PENDING,
  REQUEST_TOKENS_SUCCESS,
  REQUEST_TOKENS_FAILED,
} from './actionTypes';



export const requestTokens = () => dispatch => {
  dispatch({ type: REQUEST_TOKENS_PENDING });
  apiCall('https://api.tryroll.com/v2/tokens')
    .then((data) =>
      dispatch({ type: REQUEST_TOKENS_SUCCESS, payload: data })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_TOKENS_FAILED, payload: error })
    );
};



