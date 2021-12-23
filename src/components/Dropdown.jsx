import React from "react";
import { useState } from "react";
import Arr from "../task";

function Dropdown() {
  const [view, setView] = useState("block");

  function inputText(event) {
    console.log("typed");
    console.log(event.target.value);
  }

  function clickHandler(event) {
    console.log("clicked");

    console.log(event.target.id);

    console.log("togggle display");

    // setView(function (prevState) {
    //   console.log("prev state");
    //   console.log(prevState);

    //   if (prevState === "none") {
    //     return "block";
    //   } else {
    //     return "none";
    //   }
    // });
  }

  function checkboxClicked(event) {
    console.log("check box clicked");

    console.log(event.target.value);

    console.log(event.target.name);
  }

  function createSubOptionholder(item) {
    console.log("at create sub option holder func");

    console.log(item);
    console.log(item.state);
    return (
      <div className="sub-options-holder-a">
        <div className="sub-options-holder-a-top">
          <input
            onClick={checkboxClicked}
            type="checkbox"
            id={"id_" + item.state}
            name={"n_" + item.state}
            value={"val_" + item.state}
          ></input>

          <span id={"span_id_" + item.state} onClick={clickHandler}>
            {item.state}
          </span>
        </div>

        <div className="sub-options-holder-a-bottom">
          <ul>
            {item.city.map(function (item) {
              console.log(item);

              console.log("item.name");

              console.log(item.name);

              return (
                <li>
                  <input
                    onClick={checkboxClicked}
                    type="checkbox"
                    id={"id_" + item.name}
                    name={"n_" + item.name}
                    value={"val_" + item.name}
                  ></input>

                  <label for={"id_" + item.name}>{item.name}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
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
          <button id="primary-btn">India</button>
        </div>

        <div
          style={{ display: view }}
          id="options-holder-id"
          className="options-holder"
        >
          {Arr[0].state.map(createSubOptionholder)}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
