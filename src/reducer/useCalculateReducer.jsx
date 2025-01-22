import { useReducer } from "react";

const initialState = { input: "", operator: "", displayInput: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "setInput":
      return {
        ...state,
        displayInput:
          state.displayInput === "0"
            ? action.payload
            : state.displayInput + action.payload,
        input:
          state.displayInput === "0"
            ? action.payload
            : state.input + action.payload,
      };

    case "setOperator":
      if (state.operator) {
        return {
          ...state,
          operator: state.operator,
        };
      } else if (action.payload === "x") {
        return {
          ...state,
          operator: "*",
          input: state.displayInput + "*",
          displayInput: state.displayInput + "x",
        };
      } else {
        return {
          ...state,
          operator: action.payload,
          input: state.displayInput + action.payload,
          displayInput: state.displayInput + action.payload,
        };
      }

    case "getResult":
      if (
        !state.displayInput ||
        state.displayInput === "Error" ||
        state.displayInput === "x" ||
        state.displayInput === "-" ||
        state.displayInput === "+"
      ) {
        return {
          ...state,
          displayInput: "Error",
        };
      } else {
        return {
          ...state,
          displayInput: eval(state.input).toString(),
          operator: "",
        };
      }

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const useCalculateReducer = () => useReducer(reducer, initialState);

export default useCalculateReducer;
