/* eslint-disable react/prop-types */
const ButtonsNumbers = ({ dispatch }) => {
  return (
    <div className="buttons-numbers">
      <button onClick={() => dispatch({ type: "setInput", payload: "1" })}>
        1
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "2" })}>
        2
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "3" })}>
        3
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "4" })}>
        4
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "5" })}>
        5
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "6" })}>
        6
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "7" })}>
        7
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "8" })}>
        8
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "9" })}>
        9
      </button>
      <button onClick={() => dispatch({ type: "setInput", payload: "0" })}>
        0
      </button>
    </div>
  );
};

export default ButtonsNumbers;
