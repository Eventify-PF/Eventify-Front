import axios from "axios";
import { POST_USER, GET_USER, UPDATE_USER } from "../action-type/userConstans";


const endpoint = `http://localhost:3001/users`;
//const endpoint = `https://server-eventifypro.onrender.com`;

export function postUser(userData) {
  console.log(userData);
    return async (dispatch) => {
      try {
        const { data } = await axios.post(`${endpoint}/register`, userData);;
        dispatch({
          type: POST_USER,
          payload: data,
        });
      } catch (error) {
        console.log(error);
        return error.message;
      }
    };
  }


  export const getUser = (id) => {
    return async (dispatch) => {
      const { data } = await axios.get(`http://localhost:3001/users/${id}`);
      return dispatch({ type: GET_USER, payload: data });
    };
  };
  

  export const updateUser = (user, id) => {
    return async (dispatch) => {
      const { data } = await axios.put(`http://localhost:3001/users/${id}`, user);
      return dispatch({ type: UPDATE_USER, payload: data });
    };
  };
  
  
  