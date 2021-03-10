import { TOKENDETAIL } from '../actions/index';

const tokenDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case TOKENDETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default tokenDetailReducer;
