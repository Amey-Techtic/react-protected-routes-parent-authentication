import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  //if token is not created and user externally try to access the admin portal, then he will be redirected back to home page

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    
  };

  return (
    <>
      <h1>Admin Portal</h1>

      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default AdminPortal;
