import { createAction } from '@reduxjs/toolkit';

import { Auth0Response } from '../interface';
import { auth } from '../constants';

export const handleAuth0Success = createAction<Auth0Response>(auth.HANDLE_AUTH_SUCCESS);