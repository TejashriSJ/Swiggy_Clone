import { ADD_USER, REMOVE_USER } from "../actionTypes";

const initUser = { users: {} };

const user = (state = initUser, action) => {
  console.log("user added");
  switch (action.type) {
    case ADD_USER:
      console.log("phone number", action.payload.phoneNo);
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

    default:
      return state;
  }
};

export default user;
