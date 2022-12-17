import React, { useEffect, useState } from "react";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
import classes from "./RepoCard.module.css";
const RepoCard = (props) => {
  const [language, setLanguage] = useState({});
  const [loaded, setLoad] = useState(false);

  useEffect(() => {
    if (props.repo.name !== undefined && props.repo.name !== "") {
      getLanguage();
    }
  }, []);

  const getLanguage = (e) => {
    axios
      .get(`${props.repo.languages_url}`)
      .then(async (response) => {
        const data = response.data;
        setLanguage(data);
        setLoad(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.card} key={props.repo.id}>
      <h2>{props.repo.name}</h2>
      <p>
        {props.repo.description ? props.repo.description : "No Description"}
      </p>
      {loaded ? (
        <div className={classes.languageBox}>
          {Object.keys(language).map((value, index) => {
            return (
              <div className={classes.language} key={index}>
                {value}
              </div>
            );
          })}
        </div>
      ) : (
        <ScaleLoader color="#41b5ff" />
      )}
    </div>
  );
};

export default RepoCard;
