
const initialState = [];
const ACTION_UPDATE_PILLS = "ACTION_UPDATE_PILLS";


export const actionUpdatePills = (data) => ({
    type: ACTION_UPDATE_PILLS,
    data
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_UPDATE_PILLS:
      return [...action.data];
    default:
      return state;
  }
};