import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useEffect } from "react";

const Github = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/Shivgithub007")
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d);
      });
  }, []);
  return(
    <>
        <h1>{data.login}</h1>
    </>
  );
};

export default Github;
