// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser, registerDonor, signIn, verifyOtp } from "./authApiSlice";


const initialState = {
  user : localStorage.getItem("loginUser") ? JSON.parse(localStorage.getItem("loginUser")) : null,
  loading: false,
  message: null,
  error: null,
};

// create auth slice
const authSlice = createSlice({
  name: "donorAuth",
  initialState,

  reducers: {
    setMessageEmpty: (state) => {
      state.error = null;
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // 🔹 Register Donor
      .addCase(registerDonor.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
       // state.user = action.payload.user || null; // optional
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
    
      })
      .addCase(verifyOtp.fulfilled, (state, action) =>{
        state.loading = false;
        state.message = action.payload.message;
        state.user = action.payload.user ;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.message = null;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.user = action.payload.user ; 
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.message = null;
      })
      .addCase(getLoggedInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) =>{
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
        
        
      })
      .addCase(getLoggedInUser.rejected, (state, action ) => {
        state.loading = false;
        state.error = action.error;
        state.user = null;
      });
  },
});

// selector 
export const authSelect = (state) => state.donorAuth;

// actions
export const { setMessageEmpty } = authSlice.actions;

// export reducer
export default authSlice.reducer;
