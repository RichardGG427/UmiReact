import React, { Component } from "react";
import styles from "./index.css";
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar } from "antd";
import logo from "../../public/logo.png";
import { Link } from "umi";
import menuList from "../../mock/menu";
import { connect } from "umi";
// import "ant-design-pro/dist/ant-design-pro.css";
// import "ant-design-pro/lib/Login/style/css"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//inject user state and logout method
@connect(
  (state) => ({
    userinfo: state.user,
  }),
  {
    logout: () => ({ type: "user/logout" }), //action is namespace + reducer
  }
)
export default class index extends Component {
  state = {
    siderMenu: [],
    collapsed: false,
  };
  //init menu data for level 2 menu
  componentDidMount() {
    this.setState({
      siderMenu: menuList[0],
    });
  }
  //click level one to switch level two
  levelOne = (ind) => {
    this.setState({
      siderMenu: menuList[ind],
    });
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>User Center</Menu.Item>
        <Menu.Item onClick={() => this.props.logout()}>Log Out</Menu.Item>
      </Menu>
    );
    const routename = "/" + this.props.location.pathname.split("/")[1];
    const selectedKeys = [routename];
    return (
      <div>
        <Layout>
          <Header className="header">
            <img src={logo} className={styles.logo} />
            <Menu
              theme="dark"
              mode="horizontal"
              //   defaultSelectedKeys={["2"]}
              selectedKeys={selectedKeys}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="/home">
                <Link onClick={() => this.levelOne(0)} to="/">
                  Homepage
                </Link>
              </Menu.Item>
              <Menu.Item key="/about">
                <Link onClick={() => this.levelOne(1)} to="/about">
                  About
                </Link>
              </Menu.Item>
              <Menu.Item key="/goods">
                <Link onClick={() => this.levelOne(2)} to="/goods">
                  Goods
                </Link>
              </Menu.Item>
            </Menu>
            <div className={styles.user}>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  <Avatar size="large" src={this.props.userinfo.userimg} />
                  {this.props.userinfo.username}
                  <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </Header>
          <Layout className={styles.content}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              width={200}
              style={{ background: "#fff" }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {/* loop render level 2 menu */}
                {this.state.siderMenu.map((val) => (
                  <SubMenu
                    key={val.keyValue}
                    title={
                      <div>
                        <Icon type={val.iconType} />
                        <span>{val.title}</span>
                      </div>
                    }
                  >
                    {val.children
                      ? val.children.map((vals) => (
                          <Menu.Item key={vals.keyValue}>
                            <Link to={vals.routeurl}>{vals.title}</Link>
                          </Menu.Item>
                        ))
                      : null}
                  </SubMenu>
                ))}
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
