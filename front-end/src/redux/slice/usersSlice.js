import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from '../actions/actionUsers';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const UsersSlice = createSlice({
  name: "getUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.users = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.users = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const listUserReducer = UsersSlice.reducer;