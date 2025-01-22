import useCalculateReducer from "../reducer/useCalculateReducer";
import ButtonsNumbers from "./buttons/ButtonsNumbers";
import ButtonsOperators from "./buttons/ButtonsOperators";
import Input from "./input/Input";

const Calculator = () => {
  const [state, dispatch] = useCalculateReducer();

  return (
    <>
      <Input state={state} />
      <div className="buttons">
        <ButtonsNumbers dispatch={dispatch} />
        <ButtonsOperators dispatch={dispatch} />
      </div>
    </>
  );
};

export default Calculator;
