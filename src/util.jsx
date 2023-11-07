import React, { useEffect } from "react";

const github = async () => {
  try {
    const response = await fetch("https://api.github.com/users/Shivgithub007");
    let data=await response.json();
    console.log(data);
    return data;
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default github;
