/* eslint-disable no-unused-vars */
import axios from "axios";

const wasItTastyApi = axios.create({
  baseURL: "http://localhost:8888",
});

const addToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const register = (input) => {
  return wasItTastyApi.post("/auth/register", input);
};

export const login = (input) => {
  return wasItTastyApi.post("/auth/login", input);
};

export const getMe = (token) => {
  return wasItTastyApi.get("/auth/getme", addToken(token));
};

export const getContent = (token) => {
  return wasItTastyApi.get("/content/getcontent", addToken(token));
};

export const getContentById = (id, token) => {
  return wasItTastyApi.get(`/content/${id}`, addToken(token));
};

export const addContent = (input, token) => {
  return wasItTastyApi.post("/content/addcontent", input, addToken(token));
};

export const deleteContent = (id, token) => {
  return wasItTastyApi.delete(`/content/${id}`, addToken(token));
};

export const updateContent = (id, input, token) => {
  return wasItTastyApi.patch(`/content/${id}`, input, addToken(token));
};
