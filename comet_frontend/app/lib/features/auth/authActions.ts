// userActions.ts
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { loginSuccess, loginFailure } from './authSlice';
import { getUser } from '../user/userSlice';
import { hashPassword } from '@/app/utils/hashPassword';


export const loginAction = (credentials: { username: string; password: string }): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
  try {
    const hashedPassword = await hashPassword(credentials.password);
    // credentials.password = hashedPassword;
    console.log(hashedPassword)
    const response = await fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();
    localStorage.setItem('token', data.token);
    dispatch(loginSuccess(data.token));
    dispatch(getUser(data.user));
  } catch (error) {
    console.error('Login error:', error);
    // Handle login error
    dispatch(loginFailure('Login failed. Please try again.'))
  }
};