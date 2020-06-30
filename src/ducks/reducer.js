const initialState = {
  username: "",
  userId: 0,
  profilePic: "",
};

export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER"
export const GET_USER = "GET_USER"

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: initialState
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
}
