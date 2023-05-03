import { ADD_USER, LOG_IN, LOG_OUT } from "../actionTypes";

const initUser = { users: {}, loggedInUser: "Sign In" };

const user = (state = initUser, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.phoneNo]: {
            name: action.payload.name,
            email: action.payload.email,
          },
        },
      };
    case LOG_IN:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        loggedInUser: "Sign In",
      };

    default:
      return state;
  }
};

export default user;
