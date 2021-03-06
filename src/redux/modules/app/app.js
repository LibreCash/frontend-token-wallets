import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const SET_AUTH_STATE = 'app/app/SET_AUTH_STATE';
export const LOGOUT = 'app/app/LOGOUT';
export const LOGIN = 'app/app/LOGIN';
export const CHECK_AUTH = 'app/app/CHECK_AUTH';
export const FETCH_USER = 'app/app/FETCH_USER';

export const setAuthState = createAction(SET_AUTH_STATE);
export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const checkAuth = createAction(CHECK_AUTH);
export const fetchUser = createAsyncAction(FETCH_USER);

/**
 * Reducer
 */

const initialState = from({
  authorized: false,
  token: '',
  user: {
    email: '',
    name: '',
    defaultVerificationMethod: 'email',
    wallets: [
      {
        address: ''
      }
    ],
    preferences: {
      notifications: {
        user_signin: false,
        user_change_password: false,
        user_reset_password: false
      },
      verifications: {
        user_signin: false,
        user_change_password: false,
        transaction_send: false
      }
    }
  }
});

export default createReducer({
  [SET_AUTH_STATE]: (state, { payload }) => (
    state.merge(payload)
  ),

  [fetchUser.SUCCESS]: (state, { payload }) => (
    state.merge({
      user: payload
    })
  )
}, initialState);
