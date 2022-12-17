import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
// import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigateTo = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input ", searchInput);
    navigateTo(`/${searchInput}`);
  };

  return (
    <div className={classes.searchBox}>
      <div>
        <h1>Enter username</h1>
      </div>
      <div className={classes.typeBox}>
        <input
          type="search"
          className={classes.searchType}
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <Link to={`/${searchInput}`}>
          <button type="submit">Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
