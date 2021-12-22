import React from "react";
import { useState } from "react";

function Dropdown() {
  const [view, setView] = useState("none");

  function inputText(event) {
    console.log("typed");
    console.log(event.target.value);
  }

  function clickHandler(event) {
    console.log("clicked");

    console.log(event.target.id);

    console.log("togggle display");

    setView(function (prevState) {
      console.log("prev state");
      console.log(prevState);

      if (prevState === "none") {
        return "block";
      } else {
        return "none";
      }
    });
  }

  function checkboxClicked(event) {
    console.log("check box clicked");

    console.log(event.target.value);

    console.log(event.target.name);
  }

  return (
    <div className="dropdown-itself">
      <div className="inner-div   top-div">
        <input
          className="search-btn-cls"
          placeholder="Search"
          onChange={inputText}
          id="search-btn"
          type={"text"}
        ></input>
      </div>

      <div className="inner-div    bottom-div">
        <div className="primary-btn-holder">
          <button id="primary-btn" onClick={clickHandler}>
            India
          </button>
        </div>

        <div
          style={{ display: view }}
          id="options-holder-id"
          className="options-holder"
        >
          <div className="sub-options-holder-a">
            <div className="sub-options-holder-a-top">
              <input
                onClick={checkboxClicked}
                type="checkbox"
                id="id_Madhyapradesh"
                name="n_Madhyapradesh"
                value="val_Madhyapradesh"
              ></input>

              {/* <label onClick={clickHandler}   for="id_Madhyapradesh"> Madhyapradesh</label> */}

              <span id="span_id_Madhyapradesh" onClick={clickHandler}>
                Madhyapradesh
              </span>
            </div>
            <div className="sub-options-holder-a-bottom">
              <ul>
                <li>
                  <input
                    onClick={checkboxClicked}
                    type="checkbox"
                    id="id_Indore"
                    name="n_Indore"
                    value="val_Indore"
                  ></input>

                  <label for="id_Indore">Indore</label>
                </li>

                <li>
                  <input
                    onClick={checkboxClicked}
                    type="checkbox"
                    id="id_Bhopal"
                    name="n_Bhopal"
                    value="val_Bhopal"
                  ></input>

                  <label for="id_Bhopal">Bhopal</label>
                </li>
                <li>
                  <input
                    onClick={checkboxClicked}
                    type="checkbox"
                    id="id_Harda"
                    name="n_Harda"
                    value="val_Harda"
                  ></input>

                  <label for="id_Harda">Harda</label>
                </li>
              </ul>
            </div>
          </div>

          <div className="sub-options-holder-a">
            <div className="sub-options-holder-a-top">
              <input
                onClick={checkboxClicked}
                type="checkbox"
                id="id_WestBengal"
                name="n_WestBengal"
                value="val_WestBengal"
              ></input>

              {/* <label onClick={clickHandler}   for="id_Madhyapradesh"> Madhyapradesh</label> */}

              <span id="span_id_WestBengal" onClick={clickHandler}>
                West Bengal
              </span>
            </div>
            <div className="sub-options-holder-a-bottom">
              <ul>
                <li>
                  <input
                    onClick={checkboxClicked}
                    type="checkbox"
                    id="id_Kolkata"
                    name="n_Kolkata"
                    value="val_Kolkata"
                  ></input>

                  <label for="id_Kolkata">Kolkata</label>
                </li>

                <li>
                  <input
                    onClick={checkboxClicked}
                    type="checkbox"
                    id="id_Alipurduar"
                    name="n_Alipurduar"
                    value="val_Alipurduar"
                  ></input>

                  <label for="id_Alipurduar">Alipurduar</label>
                </li>
                <li>
                  <input
                    onClick={checkboxClicked}
                    type="checkbox"
                    id="id_Bankura"
                    name="n_Bankura"
                    value="val_Bankura"
                  ></input>

                  <label for="id_Bankura">Bankura</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
