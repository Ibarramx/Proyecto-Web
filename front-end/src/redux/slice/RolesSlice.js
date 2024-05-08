import { createSlice } from "@reduxjs/toolkit";
import { getRoles, getRoleUnique } from '../actions/actionRoles';

const initialState = {
  roles: [],
  role: {},
  loading: false,
  error: null,
};

const RolesSlice = createSlice({
  name: "getRoles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoles.pending, (state) => {
        state.roles = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.roles = [];
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getRoleUnique.pending, (state) => {
        state.role = {};
        state.loading = true;
        state.error = null;
      })
      .addCase(getRoleUnique.fulfilled, (state, action) => {
        state.role = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getRoleUnique.rejected, (state, action) => {
        state.role = {};
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getRoleReducer = RolesSlice.reducer;