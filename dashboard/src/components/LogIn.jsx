import React from "react";

function LogIn() {
  return (
    <div className="container text-center">
      <div className="row">
        <h1 className="mb-5 pb-4 border-bottom">please login your Account</h1>
      </div>
      <div className="row">
        <form
          className="mb-5 py-5"
          style={{
            border: "1px black solid",
            width: "60%",
            borderRadius: "15px",
            margin: "0 auto",
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              style={{
                width: "50%",
                margin: "0 auto",
                display: "block",
                height: "38px",
                fontSize: "14px",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              id="password"
              style={{
                width: "50%",
                margin: "0 auto",
                display: "block",
                height: "38px",
                fontSize: "14px",
              }}
            />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" />

            <label className="form-check-label" htmlFor="check">
              <a href="" style={{ textDecoration: "none" }}>
                click to login
              </a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
