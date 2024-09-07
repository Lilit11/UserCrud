import { createSlice } from "@reduxjs/toolkit";
import { addUser, editUser, getAllUsers, handleDelete } from "../../api/api";
import { act } from "react";

const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(handleDelete.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id != action.payload.id);
      });
  },
});

export const UserReducer = UserSlice.reducer;
