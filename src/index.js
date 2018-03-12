import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { Component } from 'react';
import store from './store/index'
import './index.css' 

class Prueba extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { 
      value, 
      numbers, 
      showElem, 
      emptyNum, 
      evalString } = this.props;
  return (
    <div className="App" disabled>
      <div className="value-container">
        <input type="text" value={value} />
      </div>
      <div className="buttons-container">
        {numbers.map((item, key) => {
          if(item == "C"){
            return(
              <button key={key} onClick={ emptyNum.bind(this) }>{item}</button>
            )
          } else if(item === "="){
            return(
              <button key={key} onClick={ evalString.bind(this, value) }>{item}</button>
            )
          } else {
            return(
              <button key={key} onClick={ showElem.bind(this, item) }>{item}</button>
            )
          }
        })}
      </div>
    </div>
  );
}
}

const stateP = (state) => {
  return{
    value: state.value,
    numbers: state.numbers
  }
}
const dispatchP = (dispatch) => {
  return{
    showElem: (text) => {
      dispatch({
        type: 'SHOW_ELEM',
        text
      })
    },
    emptyNum: () => {
      dispatch({
        type: 'EMPTY_NUM'
      })
    },
    evalString: (value) => {
      dispatch({
        type: 'EVAL_STRING',
        value
      })
    }
  }
}

const Calc = connect(stateP, dispatchP)(Prueba);


render(
    <Provider store={store}>
        <Calc />
    </Provider>
    , document.getElementById('root'));
