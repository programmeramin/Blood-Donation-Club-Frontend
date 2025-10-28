// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import donorAuthReducer from "../features/auth/authSlice";



// ✅ Configure store
export const store = configureStore({
  reducer: {
    donorAuth: donorAuthReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: false, // Redux Persist এর জন্য serializable check disable
    }),
  devTools: true,
});



export default store;
