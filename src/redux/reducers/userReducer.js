import {POST_USER} from "./actions/action-types";
  
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
 }
};

export default userReducer;
