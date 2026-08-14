import React from "react";

function BrockHelp({ para, imgURL }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <p className="fs-2 pt-5 mt-5">{para}</p>
          <img src={imgURL} alt="image"></img>
        </div>
      </div>
    </>
  );
}

export default BrockHelp;
