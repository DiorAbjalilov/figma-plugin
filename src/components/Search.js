import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../App";
import "./style.css";
const Search = () => {
  const [folder, setFolder] = useState([]);
  const [folderOne, setFolderOne] = useState([]);
  const [category, setCategory] = useState([]);
  const [icons, setIcons] = useState([]);
  const getFolder = async () => {
    try {
      const res = await axios.get(api + "folders");
      const { data } = await res;
      data && setFolder(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCategory = async (folder) => {
    try {
      //   console.log(folder);
      setFolderOne(folder);
      const res = await axios.get(api + "category?folder=" + folder);
      const { data } = await res;
      data && setCategory(data.filter((i) => i !== ".DS_Store"));
    } catch (error) {
      console.log(error);
    }
  };
  const getIcons = async (folder, category) => {
    try {
      const res = await axios.get(
        api + "icons?folder=" + folder + "&category=" + category
      );
      const { data } = await res;
      data && setIcons(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFolder();
  }, []);

  return (
    <div className="search">
      <div className="searchInput">
        <Form.Select onChange={(e) => getCategory(e.target.value)}>
          <option>Default select</option>
          {folder &&
            folder.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
        </Form.Select>
        <Form.Select onChange={(e) => getIcons(folderOne, e.target.value)}>
          <option>Default select</option>
          {category &&
            category.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
        </Form.Select>
        <div className="icons">
          {icons.length === 0 ? (
            <p>no item</p>
          ) : (
            icons.map((item, index) => {
              return (
                <div className="icon" key={index}>
                  <img src={api + "static/" + item.path} />
                  <p>{item.name}</p>
                  <Button variant="danger">Delete</Button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
