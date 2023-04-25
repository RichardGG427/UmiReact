import { Redirect } from "umi";
import React,{Component} from 'react';
import {connect} from 'umi';

@connect(
  state=>({token:state.user.token})
)

export default class extends Component{
  render(){
    if(this.props.token){
      return <div>{this.props.children}</div>
    }
    return <Redirect to="/login" />
  }

}

// export default (props) => {
//   function useAuth() {
//     if (Math.random() > 0.5) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   const isLogin = useAuth();
//   console.log("isLogin=", isLogin);

//   if (isLogin) {
//     return <div>{props.children}</div>;
//   } else {
//     return <Redirect to="/login" />;
//   }
// };
