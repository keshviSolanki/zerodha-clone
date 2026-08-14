import React from "react";

function SingUp() {
  return (
    <div className="container text-center">
      <h1 className="mt-4">Open a free demat and trading account online</h1>

      <h3 className="text-muted fs-6 mb-5 pb-5">
        Investing brokerage free and join a community of 1.6+ crore investors
        and traders
      </h3>

      <div className="signup">
        <h1 className="mb-3">Signup now</h1>
        <h4 className="text-muted fs-6 mb-5">
          Or track your existing application
        </h4>

        <form className="mb-5">
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

export default SingUp;
