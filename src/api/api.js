import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3004/users";

export const getById = async (id) => {
  const response = await axios.get(`http://localhost:3004/users/${id}`);
  return await response.data;
};

export const randomNumber = () => {
  return Math.floor(Math.random() * 1000001);
};

export const getAllUsers = createAsyncThunk("users/all", async () => {
  const response = await axios.get(url);
  return await response.data;
});
export const addUser = createAsyncThunk("users/new", async (user) => {
  const response = await axios.post(url, user);
  return await response.data;
});
export const editUser = createAsyncThunk("users/edit", async (payload) => {
  const response = await axios.put(
    `http://localhost:3004/users/${payload.id}`,
    payload.user
  );
  const res = await getById(payload.id);
  return await res;
});
export const handleDelete = createAsyncThunk("users/delete", async (id) => {
  const response = await axios.delete(`http://localhost:3004/users/${id}`);
  return await response.data;
});
