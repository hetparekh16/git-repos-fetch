import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "../RepoCard/RepoCard";
import GridLoader from "react-spinners/GridLoader";
import classes from "./RepoComponent.module.css";
const RepoComponent = (props) => {
  // const { username, pageNumber } = props;
  const [loaded, setLoaded] = useState(false);
  console.log("user", props.username);
  useEffect(() => {
    // console.log(pageNumber);
    if (props.username !== undefined || props.username !== "") {
      getUserRepo();
    }
  }, [props.pageNumber]);

  const [userRepo, setUserRepo] = useState([]);
  console.log(props.pageNumber);
  const getUserRepo = (e) => {
    axios
      .get(
        `https://api.github.com/users/${props.username}/repos?per_page=10&page=${props.pageNumber}`
      )
      .then((response) => {
        // const data = response.data;
        console.log(response);
        setUserRepo(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loaded ? (
        <div className={classes.repoContainer}>
          <div className={classes.repoGrid}>
            {userRepo.map((repo) => (
              <RepoCard repo={repo} key={repo.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className={classes.Loader}>
          <GridLoader color="#41b5ff" />
        </div>
      )}
    </>
  );
};

export default RepoComponent;
