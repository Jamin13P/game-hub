const initialState = {
  username: "",
  userId: 0,
  profilePic: "",
};

const SET_USER = "SET_USER";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
