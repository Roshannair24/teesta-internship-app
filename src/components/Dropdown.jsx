import React from "react";
import { useState } from "react";
import Arr from "../task";
import checkedObj from "../checkedArr";

function Dropdown() {
  const [rendered, setrendered] = useState(false);
  const [stateObject, setstateObject] = useState({
    Madhyapradesh: false,
    WestBengal: false,
    Karnataka: false,
  });

  const [checkedstateObject, setcheckedstateObject] = useState({});

  const [parentcityObject, setparentcityObject] = useState({});

  const [primarystateObject, setprimarystateObject] = useState({});

  const [statecitycounterObject, setstatecitycounterObject] = useState({
    Madhyapradesh: 0,
    WestBengal: 0,
    Karnataka: 0,
  });

  const [objToExport, setobjToExport] = useState({});

  function inputText(event) {
    console.log("typed");
    console.log(event.target.value);
  }

  function clickHandler(event) {
    console.log("clicked");

    console.log(event.target.id);

    console.log("togggle display");

    if (event.target.id === "primary-btn") {
      console.log("its india button");

      console.log(rendered);
      setrendered(!rendered);
    } else {
      console.log("state object");

      console.log(stateObject);

      let targetToCompare = event.target.id.replace("span_id_", "");

      targetToCompare = targetToCompare.replace(" ", "");

      console.log("targetToCompare");
      console.log(targetToCompare);

      for (const property in stateObject) {
        console.log(`${property}: ${stateObject[property]}`);
      }

      setstateObject(function (prevValue) {
        console.log("prevValue");

        console.log(prevValue);

        if (targetToCompare === "Madhyapradesh") {
          return {
            Madhyapradesh: !prevValue.Madhyapradesh,
            WestBengal: prevValue.WestBengal,
            Karnataka: prevValue.Karnataka,
          };
        } else if (targetToCompare === "WestBengal") {
          return {
            Madhyapradesh: prevValue.Madhyapradesh,
            WestBengal: !prevValue.WestBengal,
            Karnataka: prevValue.Karnataka,
          };
        } else if (targetToCompare === "Karnataka") {
          return {
            Madhyapradesh: prevValue.Madhyapradesh,
            WestBengal: prevValue.WestBengal,
            Karnataka: !prevValue.Karnataka,
          };
        }
      });
    }
  }

  function checkboxClicked(event) {
    console.log("check box clicked");

    // console.log(event.target);

    // console.log(event.target.name);

    // console.log("checkedstateObject");

    // console.log(checkedstateObject);

    if (event.target.name === "n_Madhyapradesh") {
      setprimarystateObject(function (prevValue) {
        console.log("here at primary");
        console.log(prevValue);

        return {
          ...prevValue,
          [event.target.name.replace("n_", "")]: !prevValue.Madhyapradesh,
        };
      });

      setcheckedstateObject(function (prevValue) {
        console.log("m prevValue");

        console.log(prevValue);

        return {
          ...prevValue,
          [event.target.name.replace("n_", "")]: !prevValue.Madhyapradesh,
        };
      });
    } else if (event.target.name === "n_WestBengal") {
      setprimarystateObject(function (prevValue) {
        console.log("here at primary");
        console.log(prevValue);

        return {
          ...prevValue,
          [event.target.name.replace("n_", "")]: !prevValue.WestBengal,
        };
      });

      setcheckedstateObject(function (prevValue) {
        console.log(prevValue);
        return {
          ...prevValue,
          [event.target.name.replace("n_", "")]: !prevValue.WestBengal,
        };
      });
    } else if (event.target.name === "n_Karnataka") {
      setprimarystateObject(function (prevValue) {
        console.log("here at primary");
        console.log(prevValue);

        return {
          ...prevValue,
          [event.target.name.replace("n_", "")]: !prevValue.Karnataka,
        };
      });

      setcheckedstateObject(function (prevValue) {
        console.log(prevValue);

        return {
          ...prevValue,
          [event.target.name.replace("n_", "")]: !prevValue.Karnataka,
        };
      });
    } else {
      console.log("here");
      console.log(event.target);

      console.log(event.target.className);

      let parentClass = event.target.className.replace("checkbox_", "");

      console.log(event.target.name);
      setparentcityObject(function (prevValue) {
        // console.log("parent city prevValue");

        let tempProp = event.target.name.replace("n_", "");

        return {
          ...prevValue,
          [tempProp]: !prevValue[tempProp],
        };
      });

      let cityName = event.target.name.replace("n_", "");

      // setstatecitycounterObject(function (prevValue) {
      //   console.log("statecitycounterObject prevValue");

      //   console.log(prevValue);
      //   console.log(parentcityObject);
      //   console.log(parentClass);
      //   console.log( cityName);
      //   console.log(parentcityObject[cityName]);
      //    console.log(prevValue[parentClass]);

      //   return {
      //     ...prevValue,
      //   };
      // });

      setprimarystateObject(function (prevValue) {
        console.log("here at primary");
        console.log(prevValue);

        return {
          ...prevValue,
          [parentClass]: true,
        };
      });
    }
  }

  function createSubOptionholder(item) {
    // console.log("at create sub option holder func");

    // console.log(item);
    // console.log(item.state);

    let tempState = item.state;

    tempState = tempState.replace(" ", "");
    return (
      <div className="sub-options-holder-a">
        <div className="sub-options-holder-a-top">
          <input
            checked={primarystateObject[tempState] === true ? true : false}
            onClick={checkboxClicked}
            type="checkbox"
            id={"id_" + tempState}
            name={"n_" + tempState}
            value={"val_" + tempState}
          ></input>

          <span id={"span_id_" + tempState} onClick={clickHandler}>
            {tempState}
          </span>
        </div>

        <div
          id={"bottom_id_" + tempState}
          className="sub-options-holder-a-bottom"
        >
          <ul>
            {item.city.map(function (item) {
              return (
                <li
                  className={tempState}
                  style={{
                    display: stateObject[tempState] === true ? "flex" : "none",
                  }}
                >
                  <div className="li-content-holder">
                    <input
                      checked={
                        checkedstateObject[tempState] === true
                          ? true
                          : parentcityObject[item.name] === true
                          ? true
                          : false
                      }
                      className={"checkbox_" + tempState}
                      onChange={checkboxClicked}
                      type="checkbox"
                      id={"id_" + item.name}
                      name={"n_" + item.name}
                      value={"val_" + item.name}
                    ></input>

                    <label for={"id_" + item.name}>{item.name}</label>
                  </div>
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
          <button onClick={clickHandler} id="primary-btn">
            India
          </button>
        </div>

        <div
          style={{ display: rendered === true ? "block" : "none" }}
          id="options-holder-id"
          className="options-holder"
        >
          {Arr[0].state.map(createSubOptionholder)}

          <div className="submit-btn-holder">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
