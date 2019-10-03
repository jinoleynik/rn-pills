
const initialState = {
  userName: "Eugene"
};
const ACTION_UPDATE_USER = "ACTION_UPDATE_USER";

export const actionUpdateUser = (data) => ({
  type: ACTION_UPDATE_USER,
  data
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_UPDATE_USER:
      return {...state, userName: action.data};
    default:
      return state;
  }
};