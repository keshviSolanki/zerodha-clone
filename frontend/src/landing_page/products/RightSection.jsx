import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  link,
  linkName,
}) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-1"></div>
          <div className="col-4 p-5">
            <h2 className="mb-3 mt-5">{productName}</h2>
            <p className="mb-3">{productDescription}</p>
            <a href={link} style={{ textDecoration: "none" }}>
              {linkName}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="col-6">
            <img src={imageURL} alt="image"></img>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
