const INITIAL_STATE = { authed: false };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_User":
      return { ...state, ...action.user, authed: true };
    case "RESET_User":
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default userReducer;
