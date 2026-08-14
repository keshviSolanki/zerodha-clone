import React from "react";

function HeroSupport() {
  return (
    <>
      <div className="bg-body-tertiary">
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center mb-4 pt-5 pb-4 ">
            <h1>Support Portal</h1>
            <button
              className="p-2 btn btn-primary fs-4"
              style={{ width: "13%", margin: "0 auto", marginLeft: "700px" }}
            >
              My tickets
            </button>
          </div>

          <div className="row">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 mb-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  height: "70px",
                  width: "1139px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSupport;
