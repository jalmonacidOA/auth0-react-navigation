import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Auth0Response } from '../interface';

import { auth } from '../constants';

export interface AuthState {
  loadingHandleAuth: boolean;
  handleAuthErrorMessage?: string | unknown;
  handleAuthResponse: Auth0Response;
}

export const initialAuthState: AuthState = {
  loadingHandleAuth: false,
  handleAuthErrorMessage: '',
  handleAuthResponse: {
    accessToken: '',
    idToken: '',
    expiresIn: 0,
    scope: '',
    tokenType: '',
    email: ''
  }
};

export const authReducer = createReducer(initialAuthState, (builder) => {
  builder
    .addCase(auth.HANDLE_AUTH_SUCCESS, (state, action: PayloadAction<Auth0Response>) => {
      state.handleAuthResponse = action.payload;
    })
    .addDefaultCase((state, {}) => state);
});
