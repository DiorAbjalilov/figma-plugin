import React from "react";
import { LoginHook } from "./hook";
import "./style.css";
export const Login = () => {
  const { changeText, submitLogin } = LoginHook();
  return (
    <>
      <header>
        <div className="login">
          <h1>Admin</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => changeText(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => changeText(e)}
            />
            <button onClick={() => submitLogin()}>Login</button>
          </div>
        </div>
      </header>
    </>
  );
};
