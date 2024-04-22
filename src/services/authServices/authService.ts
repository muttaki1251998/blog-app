import { setCredentials, isLoading, setError } from "../../components/Authentication/authSlice";
import { Dispatch } from "redux";
import axios from "axios";
import { RegisterType } from "../../components/Authentication/Register/RegisterType";

export const register = (userData: RegisterType) => async(dispatch: Dispatch) => {
    dispatch(isLoading(true));
    try {
        const res = await axios.post('http://localhost:8000/api/register', userData);
        dispatch(setCredentials({user: res.data.newUser, token: res.data.token}));
    }catch(err: any) {
        dispatch(setError(err));
    }
}