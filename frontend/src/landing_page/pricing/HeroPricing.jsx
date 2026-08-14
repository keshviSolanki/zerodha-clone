import React from "react";

function HeroPricing() {
  return (
    <>
      <div className="container">
        <div className="row border-bottom mt-5 py-5 text-center">
          <h1 className="mb-4">Pricing</h1>
          <p className="text-muted fs-5">
            Free equity investments and flate ₹20 traday and F&O trades.
          </p>
        </div>

        <div className="row text-center mt-5">
          <div className="col-4 p-5">
            <img
              src="media/images/pricingEquity.svg"
              alt="image"
              style={{ width: "90%" }}
            ></img>
            <h1 className="mb-3 fs-2">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/images/intradayTrades.svg"
              alt="image"
              style={{ width: "90%" }}
            ></img>
            <h1 className="mb-3 fs-2">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="media/images/pricingEquity.svg"
              alt="image"
              style={{ width: "90%" }}
            ></img>
            <h1 className="mb-3 fs-2">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPricing;
