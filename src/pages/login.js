import React, { Component } from "react";
import Login from "ant-design-pro/lib/Login";
// import "ant-design-pro/dist/ant-design-pro.css";
import styles from "./login.css";
import { connect } from 'umi';
import "ant-design-pro/lib/Login/style/css"
import logo from "../../public/logo.png";



const { UserName, Password, Submit } = Login;

@connect()
export default class extends Component {
  onSubmit = (err, values) => {
    console.log("user input:", values, err);
    this.props.dispatch({type:"user/login",payload:values})
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
            placeholder="Username"
            rules={[{ required: true, message: "Please input username" }]}
          />
          <Password
            name="password"
            placeholder="Password"
            rules={[{ required: true, message: "Please input password" }]}
          />
          <Submit>Login</Submit>
        </Login>
      </div>
    );
  }
}
