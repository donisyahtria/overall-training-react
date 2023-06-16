import { useReducer } from "react";

const initialState = {
  counter: 0,
  name: "",
};

const actions = {
  INCREMENT: "increment",
  SET_NAME: "set_name",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actions.SET_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

const ReducerState = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { counter, name } = state;

  //(kedua)   const [counter, setCounter] = useState(0);
  //   const [name, setName] = useState("");

  console.log("render");

  //(kedua)   useEffect(() => {
  //     console.log({ counter, name });
  //   }, [counter, name]);

  return (
    <div>
      <h1>Reducer State</h1>
      <p>{counter}</p>
      <p>{name}</p>
      <button
        onClick={() => {
          //(kedua)   setCounter(counter + 1);
          //   setName("Budi");
          dispatch({ type: actions.INCREMENT });
          dispatch({ type: actions.SET_NAME, payload: "Doni" });
        }}
      >
        Add Counter
      </button>
    </div>
  );
};

export default ReducerState;
