import React from "react";
import "./button.scss";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const Button = (props) => {
  return (
    <React.Fragment>
      <div className="btn-wrapper">
        {props.gotoPrevPage && (
          <div className="btn left" onClick={props.gotoPrevPage}>
            <BsArrowLeft />
          </div>
        )}
        {props.gotoNextPage && (
          <div className="btn right" onClick={props.gotoNextPage}>
            <BsArrowRight />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Button;
