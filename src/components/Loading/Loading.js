import React from "react";
import "./loading.scss";
import LoadingImg from "../../assets/pokeball.png";

const Loading = () => {
  return (
    <React.Fragment>
      <div className="loading-container">
        <img className="loadingImg" src={LoadingImg} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Loading;
