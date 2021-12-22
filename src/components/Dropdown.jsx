import React from "react";

function Dropdown() {
  function inputText(event) {
    console.log("typed");
    console.log(event.target.value);
  }

  function primaryButtonClicked(event) {
    console.log("clicked");
  }

  return (
    <div className="dropdown-itself">
      <div className="inner-div   top-div" style={{ backgroundColor: "red" }}>
        <input
          placeholder="Search"
          onChange={inputText}
          id="search-btn"
          type={"text"}
        ></input>
      </div>

      <div className="inner-div    bottom-div">
        <div className="primary-btn-holder">
          <button id="primary-btn" onClick={primaryButtonClicked}>
            India
          </button>
        </div>

        <div className="options-holder">

          <div
            className="sub-options-holder-a"
            style={{ backgroundColor: "pink" }}
          >
            <label for="vehicle1"> Madhyapradesh</label>

            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>

            <div
              className="sub-options-holder-b"
              style={{ backgroundColor: "yellow" }}
            >
              <label for="vehiclew"> Indore</label>

              <input
                type="checkbox"
                id="vehiclew"
                name="vehiclew"
                value="wheel"
              ></input>

              <label for="vehiclewa"> Bhopal</label>

              <input
                type="checkbox"
                id="vehiclewa"
                name="vehiclewa"
                value="axel"
              ></input>
            </div>
          </div>

          <div
            className="sub-options-holder-a"
            style={{ backgroundColor: "pink" }}
          >
            <label for="vehicle1"> West Bengal</label>

            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>

            <div
              className="sub-options-holder-b"
              style={{ backgroundColor: "yellow" }}
            >
              <label for="vehiclew"> Kolkata</label>

              <input
                type="checkbox"
                id="vehiclew"
                name="vehiclew"
                value="wheel"
              ></input>

              <label for="vehiclewa"> Alipurduar</label>

              <input
                type="checkbox"
                id="vehiclewa"
                name="vehiclewa"
                value="axel"
              ></input>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default Dropdown;
