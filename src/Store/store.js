import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Components/Login/loginSlice';


const store = configureStore({
  reducer: {
    isloggedIn: loginReducer,
  },
});

export default store;
