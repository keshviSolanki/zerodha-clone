import React from "react";

function Universe() {
  return (
    <>
      <div className="container">
        <div className="row text-center my-3">
          <h2 className="mb-3">The Zeodha Universe</h2>
          <p className="mb-5 pb-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <img src="media/images/smallcaseLogo.png"></img>
            <p className="text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/streakLogo.png"
              className="img-fluid"
              style={{ height: "50px", width: "160px" }}
            ></img>
            <p className="text-muted">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/sensibull.svg"
              style={{ height: "50px", width: "160px" }}
            ></img>
            <p className="text-muted">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ height: "50px", width: "160px" }}
            ></img>
            <p className="text-muted">
              Systematic trading platform that allows you to create and baskets
              statergies without coding
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/goldenpiLogo.png"
              style={{ height: "50px", width: "160px" }}
            ></img>
            <p className="text-muted">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 mb-5 ">
            <img
              src="media/images/dittoLogo.png"
              style={{ height: "50px", width: "160px" }}
            ></img>
            <p className="text-muted">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
          <button
            className="p-1 mt-3 btn btn-primary mb-5 mt-5 fs-5"
            style={{ width: "23%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
