import React from "react";
import "./Home.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-welcome">
        <h1 className="main-head">Welcome to Quiz App</h1>
        <p className="desc-main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          officia illo voluptatibus maxime nisi iure nemo dolor quibusdam
          asperiores inventore!
        </p>
        <p className="btn-main">
          <span className="head-btn-quiz">Go To Quiz </span>
          <Link to={"quiz"}>
            <span className="arrow-quiz">
              <FaArrowCircleRight />
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Home;
