import React, { useEffect } from 'react';

import { AuthRouter } from './AuthRouter';
import { AppRouter } from './AppRouter';

export const Router = () => {
  // return agent.agentProfile ? <AppRouter /> : <AuthRouter />;
  return <AuthRouter />;
};
