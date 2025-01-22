/* eslint-disable react/prop-types */
const ButtonsOperators = ({ dispatch }) => {
  return (
    <div className="buttons-operators">
      <button onClick={() => dispatch({ type: "setOperator", payload: "+" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "setOperator", payload: "-" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "setOperator", payload: "x" })}>
        x
      </button>
      <button onClick={() => dispatch({ type: "getResult" })}>=</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default ButtonsOperators;
