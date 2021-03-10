export const TOKEN = 'TOKEN';
export const TOKENDETAIL = 'TOKENDETAIL';
export const ERROR = 'ERROR';

export const getTokenAction = (data) => ({
  type: TOKEN,
  payload: data,
});

export const getTokenDetail = (detail) => ({
  type: TOKENDETAIL,
  payload: detail,
});

export const getError = (error) => ({
  type: ERROR,
  payload: error,
});
