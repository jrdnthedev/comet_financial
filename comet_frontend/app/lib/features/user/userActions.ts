import { Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getUser } from "./userSlice";

export const getUserAction = (id:number): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/users/${id}/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
          });
      
          if (!response.ok) {
            throw new Error('User Not Found');
          }
        const data = await response.json();
        console.log(data)
        dispatch(getUser(data));
    } catch {

    }
}