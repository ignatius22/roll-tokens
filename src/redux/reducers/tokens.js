import { TOKEN } from '../actions/index';

const tokenReducer = (state = [], action) => {
  switch (action.type) {
    case TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
