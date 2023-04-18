import { Redirect } from "umi";

export default (props) => {
  function useAuth() {
    if (Math.random() > 0.5) {
      return true;
    } else {
      return false;
    }
  }

  const isLogin = useAuth();
  console.log("isLogin=", isLogin);

  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
