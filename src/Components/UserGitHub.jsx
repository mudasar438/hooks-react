import React, { useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { useEffect } from "react";

const UserGitHub = () => {
  const [myobj, setMyObj] = useState([]);

  const getuser = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
    setMyObj(data);
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      <h1>
        All Data Show <FaCanadianMapleLeaf />
      </h1>
        {myobj.map((element) => {
        return (
          <div className="" key={element.id}>
            {element.login} link : {element.html_url}
          </div>
        );
      })}
    </>
  );
};

export default UserGitHub;
