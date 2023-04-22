import React, { Component } from "react";
import Login from "ant-design-pro/lib/Login";
import "ant-design-pro/dist/ant-design-pro.css";
import styles from "./login.css";
import logo from "../../public/logo.png";
const { UserName, Password, Submit } = Login;
export default class extends Component {
  onSubmit = (err, values) => {
    console.log("user input:", values, err);
  };
  render() {
    return (
      <div className={styles.loginForm}>
        {/* logo */}
        <img className={styles.logo} src={logo} />
        {/* LoginForm */}
        <Login onSubmit={this.onSubmit}>
          <UserName
            name="username"
            placeholder="Richard"
            rules={[{ required: true, message: "Please input username" }]}
          />
          <Password
            name="password"
            placeholder="123456"
            rules={[{ required: true, message: "Please input password" }]}
          />
          <Submit>Login</Submit>
        </Login>
      </div>
    );
  }
}
