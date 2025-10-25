// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { registerDonor, signIn, verifyOtp } from "./authApiSlice";

const initialState = {
  user: null,
  token: null,
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
        state.user = action.payload.user || null; // optional
        state.token = action.payload.token || null; // optional
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
        state.error = null;
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
        state.user = action.payload.user || null;
        state.token = action.payload.token || null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.message = null;
      });
  },
});

// selector 
export const authSelect = (state) => state.donorAuth;

// actions
export const { setMessageEmpty } = authSlice.actions;

// export reducer
export default authSlice.reducer;
