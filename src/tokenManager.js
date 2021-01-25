import { store } from "./redux/store";
import { resetUserAction } from "./redux/actions/userActions";

export const getToken = () => {
  let tokenInfo = JSON.parse(localStorage.getItem("token"));
  let { token, time } = tokenInfo;
  let expirationMinutes = 180;
  if (
    new Date().getTime() - Number(time) < expirationMinutes * 60 * 1000 &&
    token
  ) {
    refreshToken();
    return token;
  } else {
    expireToken();
    return false;
  }
};

export const refreshToken = () => {
  let tokenInfo = JSON.parse(localStorage.getItem("token"));
  localStorage.setItem(
    "token",
    JSON.stringify({
      ...tokenInfo,
      time: new Date().getTime().toString(),
    })
  );
};

export const expireToken = () => {
  console.log("expiring");
  store.dispatch(resetUserAction());
  console.log(store.getState());
  localStorage.setItem("token", JSON.stringify({}));
};

export const setToken = (token) => {
  let time = new Date().getTime().toString();
  localStorage.setItem("token", JSON.stringify({ token, time }));
};
