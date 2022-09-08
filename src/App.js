import "./App.css";
import Search from "./components/Search";
import AddNewIcon from "./components/AddNewIcon";
import { Login } from "./auth";
import { useEffect } from "react";
export const api = "https://hugeicon-back.herokuapp.com/";

function App() {
  const isAuthLocalStorage = JSON.parse(localStorage.getItem("hugeicons"));
  return (
    <>
      {!!isAuthLocalStorage ? (
        <>
          <div className="App">
            <Search />
            <AddNewIcon />
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default App;
