import {POST_USER} from "../action-type/userConstans";
  
const initialState = {
    userDetail: [],
} 

function userReducer(state = initialState, action) {

    switch (action.type) {
case POST_USER:
  return {
    ...state,
    userDetail: action.payload,
  };
default:
  return state; // Agrega este caso predeterminado
}
};

export default userReducer;
