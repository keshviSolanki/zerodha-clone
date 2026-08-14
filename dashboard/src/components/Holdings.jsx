import React, { useState, useEffect } from "react";
import axios from "axios"; //connection mate api to db
import VerticalGraph from "./VerticalGraph";

//holding data from data.js
// import { holdings } from "../data/data";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  //connect krse api sathe data ne
  useEffect(() => {
    axios.get("http://localhost:8080/allholdings").then((res) => {
      // aa api pr data joi chhe
      //console.log(res.data);
      setAllHoldings(res.data); // display jse all holdings
    });
  }, []);

  //chart mate
  const labels = allHoldings.map((subArray) => subArray["name"]); // badha holding na name save thay jse

  const data = {
    labels: allHoldings.map((stock) => stock.name),

    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),

        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LPT</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, idx) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875,<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428,<span>95</span>{" "}
          </h5>
          <p>current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
}

export default Holdings;
