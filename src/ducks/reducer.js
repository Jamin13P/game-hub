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
    case LOGOUT_USER:
      return {...state, ...action.payload}
    case GET_USER + "_PENDING":
      return state
    case GET_USER + "_FULFILLED":
      return {...state, user: action.payload.data}
    case GET_USER + "_REJECTED":
      return initialState
    default:
      return state;
  }
}
