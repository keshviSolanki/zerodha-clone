import React from "react";
import { Link } from "react-router-dom";
import "./Brokerage.css";
import BrockHelp from "./BrokHelp";

function Brokerage() {
  return (
    <>
      <div className="container pb-5 mb-5">
        <div
          className="row border-bottom  links pb-3"
          style={{ textDecoration: "none" }}
        >
          <div className="col-2">
            <Link to="/Equity" className="link fs-1">
              Equity
            </Link>
          </div>
          <div className="col-2">
            <Link to="/Equity" className="link fs-1">
              Currancy
            </Link>
          </div>
          <div className="col-2">
            <Link to="/Equity" className="link fs-1">
              Commodity
            </Link>
          </div>
        </div>

        <div className="row mt-5">
          <img src="media/images/brokrage.png"></img>
        </div>

        <h5 className="text-center mt-4 mb-5 pb-5 text-muted fs-4">
          <Link
            to="/"
            style={{ textDecoration: "none", letterSpacing: "1.5px" }}
          >
            Calculate your costs upfront
          </Link>{" "}
          using our brokerage calculator
        </h5>

        <div className="row">
          <BrockHelp
            para="Charges for account opening"
            imgURL="media/images/brokarage2.png"
          />
        </div>
        <div className="row">
          <BrockHelp
            para="Charges for account opening"
            imgURL="media/images/brokarage2.png"
          />
        </div>
        <div className="row">
          <BrockHelp
            para="Charges for account opening"
            imgURL="media/images/brokarage2.png"
          />
        </div>

        <h2 className="mt-5 pt-5 text-muted">Charges explained</h2>

        <div className="row mt-5 mb-3">
          <div className="col-6 text-muted">
            <h5 className="text-muted">
              Securities/Commodities transaction tax
            </h5>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.{" "}
              <br />
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
              <br />
            </p>
            <h5>Transaction/Turnover Charges</h5>
            <br />
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
              <br />
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
              <br />
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
              <br />
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022. <br />
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
              <br />
            </p>
            <br />
            <h5>Call & trade</h5>

            <p>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <br />
            <h5>Stamp charges</h5>
            <br />
            <p>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <br />
            <h5>NRI brokerage charges</h5>
            <ul>
              <li>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>

            <br />
            <h5>Account with debit balance</h5>
            <br />
            <p>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <br />
            <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
            <br />
            <ul>
              <li>
                Equity and Futures - ₹0.01 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹0.01 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
            <br />
          </div>
          <div className="col-6 text-muted">
            <h5>GST</h5>
            <br />
            <p>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <br />
            <h5>SEBI Charges</h5>
            <br />
            <p>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <br />
            <h5>DP (Depository participant) charges</h5>
            <br />
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
              <br />
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
              <br />
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
              <br />
            </p>
            <br />
            <p>₹30 + GST per pledge request per ISIN.</p>
            <br />
            <h5>AMC (Account maintenance charges)</h5>
            <br />
            <p>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Click here
              </a>
              <br />
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC,{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Click here
              </a>
              <br />
            </p>
            <br />
            <h5>Corporate action order charges</h5>
            <br />
            <p>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <br />
            <h5>Off-market transfer charges</h5>
            <br />
            <p>₹25 per transaction.</p>
            <br />
            <h5>Physical CMR request</h5>
            <br />
            <p>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <br />
            <h5>Payment gateway charges</h5>
            <br />
            <p>₹9 + GST (Not levied on transfers done via UPI)</p>
            <br />
          </div>
        </div>
        <div className="row text-muted">
          <h5>Disclaminer</h5>
          <p>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
