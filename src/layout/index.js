import React, { Component } from "react";
import styles from "./index.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import logo from "../../public/logo.png";
import { Link } from "umi";
import menuList from "../../mock/menu"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class index extends Component {
    state={
        siderMenu:[]
    }
    //init menu data for level 2 menu
    componentDidMount(){
        this.setState({
            siderMenu:menuList[0]
        })
    }
        //click level one to switch level two
        levelOne =(ind)=>{
            this.setState({
                siderMenu:menuList[ind]
            })
        }
  render() {
    const selectedKeys=[this.props.location.pathname]
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
              <Menu.Item key="/">
                <Link onClick={()=>this.levelOne(0)} to="/">Homepage</Link>
              </Menu.Item>
              <Menu.Item key="/about">
                <Link onClick={()=>this.levelOne(1)} to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="/goods">
                <Link onClick={()=>this.levelOne(2)} to="/goods">Goods</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout className={styles.content}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >



                {/* loop render level 2 menu */}
                {this.state.siderMenu.map(val=>(
                                    <SubMenu
                                    key={val.keyValue}
                                    title={
                                        <span>
                                            <Icon type={val.iconType} />
                                             {val.title}
                                        </span>
                                    }
                                    >
                                    {val.children?val.children.map(vals=>(
                                         <Menu.Item key={vals.keyValue}>{vals.title}</Menu.Item>
                                    )):null}
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
