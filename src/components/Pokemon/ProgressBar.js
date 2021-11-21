import React, { useState } from "react";
import "./progressbar.scss";

const ProgressBar = (props) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${props.done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <React.Fragment>
      <div className="progress">
        <div className="progress__done" style={style}>
          {`${props.done}%`}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
