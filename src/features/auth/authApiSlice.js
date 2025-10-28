import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api.js";

// register donor
export const registerDonor = createAsyncThunk(
  "auth/registerDonor",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post(`/api/v1/auth/register`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }     
  }
);

// Otp verify
export const verifyOtp = createAsyncThunk(
  "auth/verifyOTP",
  async (otp, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/v1/auth/verify-otp", otp, {
        withCredentials: true,
      });  
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "OTP verification failed"
      );
    }
  }
);


// Sign in
export const signIn = createAsyncThunk("auth/signIn", 
  async (data, { rejectWithValue}) =>{
    try {
      const response = await API.post("/api/v1/auth/sign-in", data, {
        withCredentials : true,
      });
      
           return response.data;

    } catch (error) {
       return rejectWithValue(
        error.response?.data?.message || "Sign in failed"
       )
    }
  }
)

// Get logged in user
export const getLoggedInUser = createAsyncThunk("auth/getLoggedInUser", 
  async (_, { rejectWithValue}) =>{
    try {
      const response = await API.get("/api/v1/auth/me", {
        withCredentials : true,
      });
      
      return response.data; 
    } catch (error) {
       return rejectWithValue(
        error.response?.data?.message || "Fetching user failed",
       )
    }
  }
)