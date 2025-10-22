import { createSlice } from "@reduxjs/toolkit";
import { registerDonor } from "./authApiSlice";


// create auth slice
const authSlice = createSlice({
  name: "donorAuth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },

  reducers: {
    setMessageEmpty: (state) => {
      state.error = null;
      state.message = null;
    },
  },

  extraReducers: (builder) =>{

     // register donor
    builder
    .addCase(registerDonor.pending, (state) =>{
        state.loader = true;
    })
    .addCase(registerDonor.rejected, (state, action) =>{
        state.loader = false;
        state.error = action.error.message;
    })
    .addCase(registerDonor.fulfilled, (state, action) =>{
        state.loader = false;
        state.message = action.payload.message;
    })
  }

});





// selector 
export const authSelect = (state) => state.donorAuth;

// actions
export const {setMessageEmpty} = authSlice.actions;

// expord reducer
export default authSlice.reducer;