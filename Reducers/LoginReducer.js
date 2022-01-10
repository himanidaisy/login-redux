import { Login } from '../constTypes';

const initialState = {
  user: {},
  error: '',
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  console.log('reducer', action.type);
  switch (action.type) {
    case Login: {
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoggedIn: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
