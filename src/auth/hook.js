import { useState } from "react";

export const LoginHook = () => {
  const [userLogin, setUserLogin] = useState({});
  const [isLogin, setisLogin] = useState(false);
  const adminLogin = {
    username: "admin",
    password: "hugeicons",
  };

  const changeText = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const submitLogin = () => {
    if (
      adminLogin.password === userLogin.password &&
      adminLogin.username === userLogin.username
    ) {
      localStorage.setItem(
        "hugeicons",
        JSON.stringify(`${Math.random()}qawsedrftgyhujikol`)
      );
      console.log("succses fuly");
      window.location.reload(false);
    } else {
      console.log("error");
    }
  };
  return { changeText, submitLogin };
};
