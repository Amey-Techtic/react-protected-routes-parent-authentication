import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const signupData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  


  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitUserData = (e) => {
    e.preventDefault();
    // localStorage.setItem('userData', JSON.stringify(userData));
    if (userData.email !== "" && userData.password !== "") {
      // navigate(`/admin?email=${userData.email}&password=${userData.password}`);
      generateTokenOnValidLogin(userData.email, userData.password);
    } else {
      alert("Please Enter Valid Details");
    }
  };

  const generateTokenOnValidLogin = (email, password) => {
    if (signupData.email === email && signupData.password === password) {
      const token = 3333;
      localStorage.setItem("token", JSON.stringify(token));
      alert("login successfull");
      navigate("/admin");   
    } else {
      alert("Invalid Credential!");
    }
  };

  return (
    <>
      <h1>User Login</h1>

      <form>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="Enter the email"
          onChange={handleInputData}
        />

        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="Enter the password"
          onChange={handleInputData}
        />
        <button onClick={(e) => submitUserData(e)}>Login</button>
      </form>
      <Link to="/signup">Sign up</Link>
    </>
  );
};

export default UserLogin;
