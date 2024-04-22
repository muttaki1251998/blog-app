import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

interface User {
    username: string;
    email: string;
    password: string;
}

interface AuthType {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null
}

const initialState: AuthType = {
    user: null,
    token: null,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{user: User, token: string}>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
            state.error = null;
        },
        isLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { setCredentials, isLoading, setError, logout } = authSlice.actions;
export default authSlice.reducer;