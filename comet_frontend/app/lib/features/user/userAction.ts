// userActions.ts
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { hashPassword } from '@/app/utils/hashPassword';

export const registerUserAction = (credentials: { email: string; password: string;firstName: string;lastName:string; }): ThunkAction<void, RootState, unknown, any> => async (dispatch:Dispatch) => { 
  try { 
    const hashedPassword = await hashPassword(credentials.password);
    credentials.password = hashedPassword;
    const response = await fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }
    console.log('user added');
  } catch (error) {
    console.error('Registration error:', error);
  }
};