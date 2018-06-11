import moducks from './moducks';

const defaultState = {
  status: null,
  message: '',
};

export const {
  notice, sagas,
  setNotice, deleteNotice,
} = moducks.createModule('notice', {
  SET_NOTICE: {
    reducer: (state, { payload: { status, message } }) => ({ ...state, status, message }),
  },
  DELETE_NOTICE: {
    reducer: (state, action) => ({ ...state, status: null, message: '' }),
  },
}, defaultState);
