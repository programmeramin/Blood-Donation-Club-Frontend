// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import donorAuthReducer from "../features/auth/authSlice";

 const store = configureStore({
  reducer: {
    donorAuth: donorAuthReducer,
  },

  middleware : (getDefaultMiddlewares) =>
    getDefaultMiddlewares(),
    devTools : true,
    preloadedState: {}, // initial state
});


// export store
export default store
