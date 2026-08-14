import React from "react";

function TeamOwner() {
  return (
    <>
      <div className="container">
        <div className="row pb-5 border-top text-center">
          <h1 className="pt-2">People</h1>
        </div>
        <div className="row g-1 align-items-center pb-5">
          <div className="col-5 text-center">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "50%" }}
            ></img>
            <h4 className="mb-2 mt-2">Nitin Kamath</h4>
            <p className="text-muted">Founder, CEO</p>
          </div>

          <div className="col-7">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Homepage{" "}
              </a>{" "}
              /
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                TradingQnA
              </a>{" "}
              /
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Twitter
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamOwner;
