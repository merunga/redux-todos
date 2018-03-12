import { operators } from "../operators";
const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: 0
};
function calculate( currentValue, previousValue, operator ) {
    switch ( operator ) {
        case operators.ADD:
            return previousValue + currentValue;
        case operators.DIVIDE:
            return previousValue / currentValue;
        case operators.MULTIPLY:
            return previousValue * currentValue;
        case operators.SUBTRACT:
            return previousValue - currentValue;
        default:
            return currentValue;
    }
}
export default function calculator(state = initialState, action) {
  switch (action.type) {
    case "ENTER_NUMBER":
      return Object.assign({}, state, {
        currentValue:
          state.currentValue === "0"
            ? action.number.toString()
            : state.currentValue + action.number.toString()
      });
    case "SET_OPERATOR":
      return {
        currentValue: "0",
        operator: action.operator,
        previousValue: state.operator
          ? calculate(
              parseFloat(state.currentValue),
              state.previousValue,
              state.operator
            )
          : parseFloat(state.currentValue)
      };
    case "PERCENTAGE":
      return Object.assign({}, state, {
        currentValue: (parseFloat(state.currentValue) / 100).toString()
      });
    case "CLEAR":
      return {
        currentValue: "0",
        operator: null,
        previousValue: 0
      };
    case "EVALUATE":
      return {
        currentValue: calculate(
          parseFloat(state.currentValue),
          state.previousValue,
          state.operator
        ).toString(),
        operator: null,
        previousValue: 0
      };
    case "TOGGLE_NEGATIVE":
      return Object.assign({}, state, {
        currentValue: (-parseFloat(state.currentValue)).toString()
      });
    default:
      return state;
  }
}
export function clear() {
  return { type: "CLEAR" };
}
export function enterNumber(number) {
  return { number, type: "ENTER_NUMBER" };
}
export function evaluate() {
  return { type: "EVALUATE" };
}
export function percentage() {
  return { type: "PERCENTAGE" };
}
export function setOperator(operator) {
  return { operator, type: "SET_OPERATOR" };
}
export function toggleNegative() {
  return { type: "TOGGLE_NEGATIVE" };
}
