import { CREATE_USER, GET_USER } from "../action-type/userConstans";

const initialState = {
  users: [],
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;