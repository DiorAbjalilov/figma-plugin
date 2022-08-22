import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const api = "https://figma-plugin.herokuapp.com/";
  const getIcons = async ({ current = 0, pageSize = 100 }) => {
    const res = await axios.get(
      api + "?page=" + current + "&pageSize=" + pageSize
    );
    // console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getIcons(0, 100);
  }, []);
  const clickPage = async (item) => {
    console.log(item);
    if (item == 1) {
      getIcons();
    }
    await getIcons((item - 1) * 100, item * 100);
  };

  return (
    <>
      <div className="app">
        {data &&
          data.map((item, index) => {
            return (
              <div className="icon" key={index}>
                {/* <img src={`${api + item.path}`} /> */}
                <p>{item.name}</p>
                <button>Delete</button>
              </div>
            );
          })}
      </div>
      <div className="btns">
        {[1, 2, 3, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <button key={index} onClick={() => clickPage(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
