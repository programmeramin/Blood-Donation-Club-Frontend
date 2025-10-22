import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";


// create store
const store = configureStore({
    reducer : {
        donorAuth : authReducer,

    },
    middleware : (getDefaultMiddlewares) => getDefaultMiddlewares(),
    devTools : true,
});


// export store
export default store