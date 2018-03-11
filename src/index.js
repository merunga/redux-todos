import React from "react";
import "./App.css";
import { render } from "react-dom";
import { connect} from "react-redux";
import nose from "./store/";
import calcReducer from "./store/";


function Prueba (props) {
  console.log(props.btns)
  console.log(props)
  return (
    <div className="App">
      <div className="value-container">
        <input type="text" value={props.value} />
      </div>
      <div className="buttons-container">
        {props.btns.map((item, key) => {
          if (item === "C") {
            return (
              <button onClick={props.clear.bind(this)} key={key}>
                {item}
              </button>
            );
          } else if (item === "=") {
            return (
              <button onClick={props.equal.bind(this, props.value)} key={key}>
                {item}
              </button>
            );
          } else {
            return (
              <button onClick={props.addElem.bind(this, item)} key={key}>
                {item}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('estadp',state)
  return {
    value: state.value,
    btns: state.btns
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addElem: text => {
      dispatch({
        type: "ADD_ELEM",
        text
      });
    },
    clear: () => {
      dispatch({
        type: "CLEAR"
      });
    },
    equal: value => {
      dispatch({
        type: "EQUAL",
        value
      });
    }
  };
};

render(
  <div >
    <Prueba store={nose} />
  </div>,
  document.getElementById("root")
);

export default connect(mapStateToProps, mapDispatchToProps)(Prueba);