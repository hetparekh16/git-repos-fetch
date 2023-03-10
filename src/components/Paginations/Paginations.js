import React, { useEffect, useState } from "react";
import RepoComponent from "../RepoComponent/RepoComponent";
import classes from "./Paginations.module.css";
import {
  IoMdArrowBack,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoMdArrowForward,
} from "react-icons/io";

const Pagination = (props) => {
  // const { username, repoCount } = props;
  const [pages, setPages] = useState({
    page: 1,
    totalPage: 1,
  });
  // console.log(props.repoCount);

  useEffect(() => {
    setPages((prev) => ({
      ...prev,
      totalPage: Math.ceil(props.repoCount.public_repos / 10),
    }));
  }, []);

  const addButtons = () => {
    let buttons = [];
    for (let i = 1; i <= pages.totalPage; i++) {
      buttons.push(
        <button
          key={i}
          style={
            pages.page === i
              ? { backgroundColor: "#4a90cf", color: "white" }
              : {}
          }
          onClick={() => setPages({ ...pages, page: i })}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handlePrevious = () => {
    if (pages.page > 1) {
      setPages({ ...pages, page: pages.page - 1 });
    }
  };
  const handleNext = () => {
    if (pages.page < pages.totalPage) {
      setPages({ ...pages, page: pages.page + 1 });
    }
  };

  return (
    <div className={classes.Pagination}>
      <RepoComponent username={props.username.login} pageNumber={pages.page} />
      <div className={classes.PageButtonBox}>
        <div className={classes.PaginationPages}>
          <button key="back" onClick={handlePrevious}>
            <IoMdArrowBack />
          </button>
          {addButtons(pages.totalPage)}
          <button key="front" onClick={handleNext}>
            <IoMdArrowForward />
          </button>
        </div>

        <div className={classes.BelowButton}>
          <button
            style={pages.page !== 1 ? { color: "#4a90cf" } : {}}
            onClick={handlePrevious}
          >
            <IoIosArrowRoundBack /> Older
          </button>
          <button
            style={pages.page !== pages.totalPage ? { color: "#4a90cf" } : {}}
            onClick={handleNext}
          >
            Newer <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
