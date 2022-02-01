import React from 'react';

import { AuthRouter } from './AuthRouter';
import { AppRouter } from './AppRouter';
import { useAppSelector } from '../redux/hooks';

export const Router = () => {
  const { handleAuthResponse } = useAppSelector((state) => state.auth);

  return handleAuthResponse.accessToken.length ? <AppRouter /> : <AuthRouter />;
};
