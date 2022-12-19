import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetailsCard from "../UserDetailsCard/UserDetailsCard";
import Pagination from "../Paginations/Paginations";
import GridLoader from "react-spinners/GridLoader";
import classes from "./UserDetails.module.css";
const UserDetails = () => {
  const username = window.location.href.split("/")[3];

  useEffect(() => {
    if (username !== undefined || username !== "") {
      getUserDetails();
    }
  }, []);

  const [userDetails, setUserDetails] = useState({
    // userName: "",
    // name: "",
    // bio: "",
    // location: "",
    // twitter: "",
    // github: "",
    // image: "",
    // loaded: false,
    // repoCount: 0,
  });

  const getUserDetails = async (e) => {
    var config = {
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
        Authorization: "Bearer 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",
      },
    };
    await axios(config)
      .then(async (response) => {
        console.log(response);
        setUserDetails(
          { ...response.data, loaded: true }

          // userName: response.data.login,
          // name: response.data.name,
          // bio: response.data.bio || "No bio available",
          // location: response.data.location || "No location available",
          // twitter: response.data.twitter_username || "unavailable",
          // github: response.data.html_url,
          // image: response.data.avatar_url,
          // loaded: true
          // repoCount: response.data.public_repos,
        );
      })
      .catch((error) => {
        setUserDetails({ ...userDetails, loaded: true });
        console.log("here", error);
      });
  };

  return (
    <>
      {userDetails.loaded ? (
        <>
          {userDetails.login ? (
            <>
              <UserDetailsCard userDetails={userDetails} />
              <Pagination username={userDetails} repoCount={userDetails} />
            </>
          ) : (
            <div className={classes.Error}>
              <h2>User with username - {username.login} is not present.</h2>
            </div>
          )}
        </>
      ) : (
        <div className={classes.Loader}>
          <GridLoader color="#41b5ff" />
          classes.
        </div>
      )}
    </>
  );
};

export default UserDetails;
