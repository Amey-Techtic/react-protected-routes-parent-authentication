import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = ({ Component }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  console.log("token", token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === 3333) {
      navigate("/admin");
    }
    else {
      navigate("/login");
    }
  }, []);
  return <div>{Component}</div>;
};

export default Authentication;
