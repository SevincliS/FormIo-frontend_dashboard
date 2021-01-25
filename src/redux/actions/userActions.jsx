const setUserAction = (user) => ({
  type: "SET_User",
  user,
});
const resetUserAction = () => ({
  type: "RESET_User",
});

export { setUserAction, resetUserAction };
