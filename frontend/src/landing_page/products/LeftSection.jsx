//left side image == left section

import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container">
        <div className="row mt-5 p-5">
          <div className="col-1"></div>
          <div className="col-6">
            <img src={imageURL} alt="image" />
          </div>

          <div className="col-1"></div>
          <div className="col-4 mt-5">
            <h2 className="mb-3">{productName}</h2>
            <p>{productDescription}</p>
            <div className="mt-3">
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                try Demo<i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href={learnMore}
                style={{ marginLeft: "30px", textDecoration: "none" }}
              >
                Learn More<i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="mt-5">
              <a href={googlePlay}>
                <img src="media/images/googleplaystore.svg"></img>
              </a>
              <a href={appStore} style={{ marginLeft: "20px" }}>
                <img src="media/images/appstore.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
