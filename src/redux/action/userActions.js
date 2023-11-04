import {
  CREATE_USER,
  GET_USER,
  UPDATE_USER,
} from "../action-type/userConstans";
import axios from "axios";

export const getUser = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/users/${id}`);
    return dispatch({ type: GET_USER, payload: data });
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      "http://localhost:3001/users/register",
      user
    );
    return dispatch({ type: CREATE_USER, payload: data });
  };
};

export const updateUser = (user, id) => {
  return async (dispatch) => {
    const { data } = await axios.put(`http://localhost:3001/users/${id}`, user);
    return dispatch({ type: UPDATE_USER, payload: data });
  };
};
