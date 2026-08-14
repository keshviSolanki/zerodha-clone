import React from "react";

function HeroHome() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img
            src="media/images/homeHero.png"
            alt="HeroHome img"
            className="mb-5 col-9 d-block mx-auto "
          ></img>
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="p-1 mt-3 btn btn-primary fs-5"
            style={{ width: "23%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroHome;
