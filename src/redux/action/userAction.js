import axios from "axios";
import { POST_USER } from "../action-type/userConstants";

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
  