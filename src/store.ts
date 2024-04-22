import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './components/Authentication/authSlice';

export const store = configureStore({
    reducer: authReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() //
