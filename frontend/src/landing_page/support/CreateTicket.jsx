import React from "react";
import "./CreateTicket.css";

function CreateTicket() {
  return (
    <>
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="col-8 mt-5 P-5">
            <select className="form-select dropdown-item p-4 mb-5 border">
              <option value="">Resident individual</option>
              <option value="react">Minor</option>
              <option value="java">Non Resident Indian (NRI)</option>
              <option value="python">Company, Partnership, HUF and LLP</option>
            </select>
            <select className="form-select dropdown-item p-4 mb-5 border">
              <option value="">Your Zerodha Account</option>
              <option value="react">React</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <select className="form-select dropdown-item p-4 mb-5 border">
              <option value="">Kite</option>
              <option value="react">React</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <select className="form-select dropdown-item p-4 mb-5 border">
              <option value="">Funds</option>
              <option value="react">React</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <select className="form-select dropdown-item p-4 mb-5 border">
              <option value="">Console</option>
              <option value="react">React</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <select className="form-select dropdown-item p-4 mb-5 border">
              <option value="">Coin</option>
              <option value="react">React</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
          </div>

          <div className="col-4">
            <div className="uperbox mt-4 pb-4 ">
              <div className="empty"></div>
              <div className="box1 pb-4 mt-4">
                <a href="">
                  <p className="py-3">
                    Latest Intraday Leverages and Square-Off-timings
                  </p>
                </a>
                <a href="">
                  <p className="pt-3">
                    Rights Entitilements listing in April 2026
                  </p>
                </a>
              </div>
            </div>
            <div className="box2 mt-4">
              <h5 className="border p-4 bg-body-tertiary">Quick links</h5>
              <p className="border p-3">
                <a href="">1. Track account opening</a>
              </p>
              <p className="border p-3">
                <a href="">2. Track segment acivation</a>
              </p>
              <p className="border p-3">
                <a href="">3. Intraday margins</a>
              </p>
              <p className="border p-3">
                <a href="">4. Kite user manual</a>
              </p>
              <p className="border p-3">
                <a href="">5. Learn how to create a ticket</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
