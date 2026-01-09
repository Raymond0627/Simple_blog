import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
   user: any | null;
}

const initialState: AuthState = {
   user: null,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        cleanUser(state) {
            state.user = null;
        }  ,
    },
    });
        

export const { setUser, cleanUser } = authSlice.actions;
export default authSlice.reducer;