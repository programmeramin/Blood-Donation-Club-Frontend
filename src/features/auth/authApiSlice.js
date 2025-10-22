import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api.js";

// register donor
export const registerDonor = createAsyncThunk(
  "auth/registerDonor",
  async (data) => {
    try {
      const response = await API.post(`/api/v1/auth/register`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// Otp verify
export const verifyOtp = createAsyncThunk("auth/verifyOTP", async (data) => {
  try {
    const response = await API.post("/api/v1/auth/verify-otp", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
