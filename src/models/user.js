import axios from "axios";
import { history } from "umi";
import { notification } from "antd";

const inituserinfo = JSON.parse(localStorage.getItem("userinfo")) || {
  token: "",
  role: "",
  username: "",
  userimg: "",
};
//api request call interface
function login(data) {
  return axios.post("/api/login", data);
}

export default {
  namespace: "user",
  state: inituserinfo,
  effects: {
    //async
    *login(action, { put, call }) {
      try {
        const res = yield call(login, action.payload);
        if (res.data.code == 0) {
          localStorage.setItem("userinfo", JSON.stringify(res.data.data));
          yield put({ type: "init", payload: res.data.data });
          history.push("/");
        }
      } catch (error) {
        // alert("Login failed,username or password incorrect!");
        notification.error({
          message: "Login failed",
          description: "Username or password incorrect!",
        });
      }
    },
    //logout
    *logout(action, { put, call }) {
      localStorage.removeItem("userinfo");
      yield put({ type: "out" });
      history.push("/login");
    },
  },
  reducers: {
    init(state, action) {
      return action.payload;
    },
    out(state, action) {
      return inituserinfo;
    },
  },
};
