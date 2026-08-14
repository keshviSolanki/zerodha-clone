import React from "react";

function HeroProduct() {
  return (
    <>
      <div className="container">
        <div className="row text-center border-bottom p-5">
          <h1 className="mb-3">Zerodha Products</h1>
          <h5 className="text-muted mb-4">
            Sleek, modern, and intuitive trading platforms
          </h5>
          <p>
            Check out our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              investment offerings <i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroProduct;
