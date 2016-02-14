import axios from 'axios';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=gretzasodjopaojpdopasd12123jopdas048";

// export constants
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";

// export functions
export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export const createPost = (props) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export const deletePost = (id) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}
