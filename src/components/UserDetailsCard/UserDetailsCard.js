import React from "react";
import { IoMdLink, IoIosPin } from "react-icons/io";
import classes from "./UserDetailsCard.module.css";
const UserDetailsCard = (props) => {
  return (
    <div className={classes.userContainer}>
      <div className={classes.userDetails}>
        <div className={classes.top}>
          <img
            className={classes.profileImage}
            src={props.userDetails.avatar_url}
          ></img>
          <div className={classes.detailBox}>
            <h1>{props.userDetails.login}</h1>
            <p>{props.userDetails.bio}</p>
            <div className={classes.location}>
              <strong>Location : </strong>
              <p> {props.userDetails.location}</p>
            </div>
            <p>
              <strong>Twitter :-</strong> &nbsp;
              <span>{props.userDetails.twitter_username}</span>
            </p>
          </div>
        </div>
        <div className={classes.bottom}>
          <IoMdLink style={{ width: "25px", height: "25px" }} />
          <a href={props.userDetails.html_url}>{props.userDetails.html_url}</a>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
