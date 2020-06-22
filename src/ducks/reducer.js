const initialState = {
  username: "",
  userId: 0,
  profilePic: "",
};

const GET_USER = "GET_USER";

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
