import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "462b5bb5004e415781ba7c8619913e8a";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=1&category=${props.category}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};